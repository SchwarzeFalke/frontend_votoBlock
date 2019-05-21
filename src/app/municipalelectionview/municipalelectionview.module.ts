import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MunicipalelectionviewPage } from './municipalelectionview.page';

const routes: Routes = [
  {
    path: '',
    component: MunicipalelectionviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MunicipalelectionviewPage]
})
export class MunicipalelectionviewPageModule {}
