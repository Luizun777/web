import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  declarations: [
    PageComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    InfoComponent
  ]
})
export class PagesModule { }
