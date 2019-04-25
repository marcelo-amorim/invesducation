import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { Socket } from 'ng-socket-io';
import * as moment from 'moment';

 
@Component({
  selector: 'app-inside',
  templateUrl: './inside.page.html',
  styleUrls: ['./inside.page.scss'],
})
export class InsidePage implements OnInit {

  private data = '';
  private formatted_time : String;
  private show_timer = false;
 
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

  startTimer() {
    this.socket.connect();
    this.socket.emit('start_timer');
    this.socket.on('timer', (data) => {

      this.formatted_time = moment().format('LTS');
    });
  }

  stopTimer() {
    this.socket.emit('stop_timer');
  }

  toggleTimer() {
    if (this.show_timer){
      this.startTimer();
    }else{
      this.stopTimer();
    }
  }
 
}