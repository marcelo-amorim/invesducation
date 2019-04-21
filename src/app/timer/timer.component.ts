import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const socket = socketIo(environment.socket_url, {transports: ['websocket']});

    socket.on('timer', (data) => console.log(data))
    
  }

}
