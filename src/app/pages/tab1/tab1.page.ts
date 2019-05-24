import { Component, OnInit } from '@angular/core';


const data = [
  {
    id: '1',
    title: 'Tesouro Direto',
    subtitle: 'Vamos aprender!',
    thumbnail: '../../assets/img/play-1.png',
  },
  {
    id: '2',
    title: 'CDB',
    subtitle: 'Vamos aprender!',
    thumbnail: '../../assets/img/play-2-off.png',
  },
  {
    id: '3',
    title: 'LCI/LCA',
    subtitle: 'Vamos aprender!',
    thumbnail: '../../assets/img/play-3-off.png',
  }
  ];

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  trilhas: any =[];

  constructor() { }

  ngOnInit() {
    this.trilhas = data;
  }

  openTrilha(index: number) {
    console.log('TODO');
  }

}
