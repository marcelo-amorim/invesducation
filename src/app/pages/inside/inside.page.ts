import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';
 
@Component({
  selector: 'app-inside',
  templateUrl: './inside.page.html',
  styleUrls: ['./inside.page.scss'],
})
export class InsidePage implements OnInit {
 
  data = '';
 
  constructor(private authService: AuthService, private storage: Storage, private toastController: ToastController, private socket: Socket) { }
 
  ngOnInit() {
  }
 
  loadSpecialInfo() {
    this.authService.getSpecialData().subscribe(res => {
      this.data = res['msg'];
    });
  }
 
  logout() {
    this.authService.logout();
  }
 
  clearToken() {
    // ONLY FOR TESTING!
    this.storage.remove('access_token');
 
    let toast = this.toastController.create({
      message: 'JWT removed',
      duration: 3000
    });
    toast.then(toast => toast.present());
  }

  loadTimer() {
    console.log('click')
    console.log(this.socket)
    this.socket.connect();
    console.log(this.socket)
    this.socket.emit('init_timer');
    this.socket.on('timer', (data) => {
      console.log(data)
      this.data = data['time'];
    });
    // let observable = new Observable(observer => {
    //   this.socket.on('timer', (data) => {
    //     console.log('b' + data)
    //     observer.next(data);
    //     console.log('a' + data)
    //   });
    // })
    // return observable;
    // this.socket.connect();
    // this.socket.emit('init_timer');
    // this.socket.on('timer', function(data){
    //   console.log(data);
    //   this.data = data;
    // });
    // const socket = socketIo(environment.socket_url, {
    //   transports: ['websocket']
    // });
    // socket.on('timer', (data) =>
    //   console.log(data)
      // this.data = String(data);
    // )
    
  }
 
}