import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the VoteViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'vote-view',
  name: 'vote-view'
})
@Component({
  selector: 'page-vote-view',
  templateUrl: 'vote-view.html'
})
export class VoteViewPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad VoteViewPage');
  }
}
