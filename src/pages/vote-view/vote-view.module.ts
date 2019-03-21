import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoteViewPage } from './vote-view';

@NgModule({
  declarations: [VoteViewPage],
  imports: [IonicPageModule.forChild(VoteViewPage)],
  entryComponents: [VoteViewPage]
})
export class VoteViewPageModule {}
