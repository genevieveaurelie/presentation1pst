import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListEventsPage } from '../list-events/list-events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  signalButton(){
    this.navCtrl.push(ListEventsPage);
  }
  
}
