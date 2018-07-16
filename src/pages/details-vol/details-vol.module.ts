import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsVolPage } from './details-vol';

@NgModule({
  declarations: [
    DetailsVolPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsVolPage),
  ],
})
export class DetailsVolPageModule {}
