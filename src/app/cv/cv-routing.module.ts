import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvComponent } from './cv.component';

import { YoComponent } from './yo/yo.component';
import { JuegosComponent } from './juegos/juegos.component';
import { ExpComponent } from './exp/exp.component';
import { InfoPageComponent } from './info-page/info-page.component';

const routes: Routes = [
  {
    path: '',
    component: CvComponent,
    children: [
      {path:'Inicio', component: YoComponent},
      {path:'Juegos', component: JuegosComponent},
      {path:'Experiencia', component: ExpComponent},
      {path:'Info', component: InfoPageComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }