import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PresidentialelectionviewPage } from './presidentialelectionview.page';

const routes: Routes = [
  {
    path: '',
    component: PresidentialelectionviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PresidentialelectionviewPage]
})
export class PresidentialelectionviewPageModule {}
