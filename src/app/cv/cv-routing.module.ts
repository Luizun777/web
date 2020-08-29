import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvComponent } from './cv.component';

import { YoComponent } from './yo/yo.component';
import { JuegosComponent } from './juegos/juegos.component';

const routes: Routes = [
  {
    path: '',
    component: CvComponent,
    children: [
      {path:'Inicio', component: YoComponent},
      {path:'Juegos', component: JuegosComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }