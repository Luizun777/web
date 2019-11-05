import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { PaginasListComponent } from './paginas-list.component';
import { PaginaComponent } from './pagina/pagina.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule,
    PaginasRoutingModule
  ],
  declarations: [
    PaginasListComponent,
    PaginaComponent,
    ListaComponent
  ]
})
export class PaginasModule { }
