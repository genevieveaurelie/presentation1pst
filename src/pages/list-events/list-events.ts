import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';
import { HomePage } from '../home/home';
import { DetailsIncendiePage} from '../details-incendie/details-incendie';
import { DetailsInondationPage} from '../details-inondation/details-inondation';
import {DetailsVolPage} from '../details-vol/details-vol';
import { DetailsAccidentPage} from '../details-accident/details-accident';
import { GravityPage } from '../gravity/gravity';

/**
 * Generated class for the ListEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-events',
  templateUrl: 'list-events.html',
})
export class ListEventsPage {

  incendie;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public afd : AngularFireDatabase, private toastCtrl: ToastController) {

  }

 incendieDetails(){
  this.afd.list('Incident rencontré/').push(this.incendie);
   this.navCtrl.push(DetailsIncendiePage);
 }
 inondationDetails(){
  this.afd.list('Incident rencontré/').push(this.incendie);
  this.navCtrl.push(DetailsInondationPage);
}
volDetails(){
  this.afd.list('Incident rencontré/').push(this.incendie);
  this.navCtrl.push(DetailsVolPage);
}
accidentDetails(){
  this.afd.list('Incident rencontré/').push(this.incendie);
  this.navCtrl.push(DetailsAccidentPage);
}
gravityChoice(){
  this.afd.list('Incident rencontré/').push(this.incendie);
  this.navCtrl.push(GravityPage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListEventsPage');
  }

}
