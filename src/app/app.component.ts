import { Component } from '@angular/core';
 
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { ProfileService } from './services/profile/profile.service';
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private profileService: ProfileService,
    private router: Router
  ) {
    this.initializeApp();
  }
 
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.authenticationState.subscribe(state => {
        if (state) {
          let user = this.authService.user;
          this.profileService.getProfile(user).subscribe(profile =>{
            if (profile == null){
              this.router.navigate(['guide']);
            }else{
              this.router.navigate(['tabs']);
            }
          });
        } else {
          this.router.navigate(['login']);
        }
      });
 
    });
  }
}