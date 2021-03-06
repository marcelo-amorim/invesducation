import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


const data = [
  {
    id: '1',
    title: 'Tesouro Direto',
    subtitle: 'Vamos aprender!',
    thumbnail: '../../assets/img/play-1.png',
  }
  ];

@Component({
  selector: 'app-tesouro-direto',
  templateUrl: './tesouro-direto.page.html',
  styleUrls: ['./tesouro-direto.page.scss'],
})
export class TesouroDiretoPage implements OnInit {
  trilhas: any =[];

  constructor(public alertController: AlertController) { }

  ngOnInit() {
    this.trilhas = data;
  }

  openTrilha(index: number) {
    console.log('TODO');
  }

  showAlert(msg, hdr) {
    let alert = this.alertController.create({
      message: msg,
      header: hdr,
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }

}
