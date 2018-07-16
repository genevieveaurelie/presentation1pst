import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsAccidentPage } from './details-accident';

@NgModule({
  declarations: [
    DetailsAccidentPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsAccidentPage),
  ],
})
export class DetailsAccidentPageModule {}
