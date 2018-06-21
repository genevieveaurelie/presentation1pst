import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {ListEventsPage} from '../pages/list-events/list-events';
import { GesteSecoursPage} from '../pages/geste-secours/geste-secours';
import { PresentationPage} from '../pages/presentation/presentation';
import {ContactPage} from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

var config = {
  apiKey: "AIzaSyCY7ZprLN9pg0ii7xLN3aY8m6cq21azlOI",
  authDomain: "appl-a-l-aide.firebaseapp.com",
  databaseURL: "https://appl-a-l-aide.firebaseio.com",
  projectId: "appl-a-l-aide",
  storageBucket: "appl-a-l-aide.appspot.com",
  messagingSenderId: "399837569881"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListEventsPage,
    GesteSecoursPage,
    PresentationPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListEventsPage,
    GesteSecoursPage,
    PresentationPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
