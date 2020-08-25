import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvComponent } from './cv.component';
import { CvRoutingModule } from './cv-routing.module';
import { YoComponent } from './yo/yo.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    CvRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    CvComponent,
    YoComponent
  ]
})
export class CvModule { }
