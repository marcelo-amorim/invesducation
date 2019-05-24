import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TesouroDiretoPage } from './tesouro-direto.page';

const routes: Routes = [
  {
    path: '',
    component: TesouroDiretoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TesouroDiretoPage]
})
export class TesouroDiretoPageModule {}
