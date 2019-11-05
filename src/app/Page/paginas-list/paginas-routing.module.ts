import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaComponent } from './pagina/pagina.component';
import { ListaComponent } from './lista/lista.component';
import { PaginasListComponent } from './paginas-list.component';

const routes: Routes = [
  {
    path: '',
    component: PaginasListComponent,
    children: [
      {path:'pagina/:id', component: PaginaComponent},
      {path:'lista', component: ListaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }