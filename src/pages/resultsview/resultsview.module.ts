import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultsviewPage } from './resultsview';

@NgModule({
  declarations: [ResultsviewPage,],
  imports: [ IonicPageModule.forChild(ResultsviewPage),],
  entryComponents: [ResultsviewPage]
})

export class ResultsviewPageModule {}
