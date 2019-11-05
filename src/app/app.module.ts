import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Page/navbar/navbar.component';
import { FooterComponent } from './Page/footer/footer.component';
import { InicioComponent } from './Page/inicio/inicio.component';
import { PaginasListComponent } from './Page/paginas-list/paginas-list.component';
import { InfoComponent } from './Page/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    PaginasListComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
