import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './Page/inicio/inicio.component';
import { InfoComponent } from './Page/info/info.component';

const routes: Routes = [
  {path:'Inicio', component: InicioComponent, data: { title: 'Heroes List' }},
  {
    path: 'paginas',
    loadChildren: './Page/paginas-list/paginas.module#PaginasModule'
  },
  {path:'info', component: InfoComponent},
  {path:'**', pathMatch:'full', redirectTo:'Inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
