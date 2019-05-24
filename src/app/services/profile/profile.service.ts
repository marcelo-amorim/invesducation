import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
 
const TOKEN_KEY = 'access_token';
 
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 
  url = environment.url;
  profile = null;
  user = null;
  authenticationState = new BehaviorSubject(false);
 
  constructor(
    private http: HttpClient,
    private helper: JwtHelperService,
    private storage: Storage,
    private plt: Platform, 
    private alertController: AlertController,
    private router: Router
    ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);
 
        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }
 
  register(usernameForm) {
    let formData = {username: usernameForm.username, user_id: this.user.id}
    return this.http.post(`${this.url}/api/profile/criar`, formData).pipe(
      tap(res => {
        this.storage.set('profile', res);
        this.router.navigate(['tabs']);
      }),
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
 
  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  getProfile(user) {
    return this.http.post(`${this.url}/api/profile/buscar`, user).pipe(
      tap(res => {
        this.storage.set('profile', res);
        // this.user = this.helper.decodeToken(res['token']);
        // this.authenticationState.next(true);
      }),
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('Acesso não autorizado!');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }
 
  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Desculpe...',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }
}