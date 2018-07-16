import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';
import { GravityPage } from '../gravity/gravity';

/**
 * Generated class for the DetailsInondationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-inondation',
  templateUrl: 'details-inondation.html',
})
export class DetailsInondationPage {

  infoinondation;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public afd : AngularFireDatabase, private toastCtrl: ToastController) {

  }

  addData(){
    this.afd.list('Incident rencontré/').push(this.infoinondation)
    this.navCtrl.push(GravityPage);
    
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsInondationPage');
  }

}
