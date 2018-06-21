import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';
import { HomePage } from '../home/home';

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

  
  incident;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public afd : AngularFireDatabase, private toastCtrl: ToastController) {

  }

 
  addData(){
    this.afd.list('Incident rencontré/').push(this.incident)

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
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListEventsPage');
  }

}
