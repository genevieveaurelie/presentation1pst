import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsIncendiePage } from './details-incendie';

@NgModule({
  declarations: [
    DetailsIncendiePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsIncendiePage),
  ],
})
export class DetailsIncendiePageModule {}
