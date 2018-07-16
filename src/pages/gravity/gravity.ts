import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';

import { MapPage } from '../map/map';

/**
 * Generated class for the GravityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gravity',
  templateUrl: 'gravity.html',
})
export class GravityPage {

  gravity;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public afd : AngularFireDatabase, private toastCtrl: ToastController) {

  }

  addData(){
    this.afd.list('Incident rencontré/').push(this.gravity)
  

      //Envoie de la notification
      let toast=this.toastCtrl.create({
        message:'Votre incident a bien été signalé',
        duration: 3000,
        position: 'middle'
      });
      toast.onDidDismiss(() =>{
        console.log('Dismissed toast');
      });
      toast.present();
      this.navCtrl.push(MapPage);
  
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad GravityPage');
  }

}
