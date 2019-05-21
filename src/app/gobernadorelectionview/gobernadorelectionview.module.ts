import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GobernadorelectionviewPage } from './gobernadorelectionview.page';

const routes: Routes = [
  {
    path: '',
    component: GobernadorelectionviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GobernadorelectionviewPage]
})
export class GobernadorelectionviewPageModule {}
