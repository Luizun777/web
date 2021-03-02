import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page.component';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {path:'Inicio', component: InicioComponent},
      {
        path: 'paginas',
        loadChildren: './paginas-list/paginas.module#PaginasModule'
      },
      {path:'info', component: InfoComponent},
    ],
  },
  // {path:'**', pathMatch:'full', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }