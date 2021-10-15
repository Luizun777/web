import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CvComponent } from './cv.component';
import { CvRoutingModule } from './cv-routing.module';
import { YoComponent } from './yo/yo.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JuegosComponent } from './juegos/juegos.component';
import { ExpComponent } from './exp/exp.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { ApiComponent } from './api/api.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CedulaComponent } from './cedula/cedula.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    CvRoutingModule,
    FontAwesomeModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    CvComponent,
    YoComponent,
    JuegosComponent,
    ExpComponent,
    InfoPageComponent,
    ApiComponent,
    ProyectosComponent,
    CedulaComponent
  ]
})
export class CvModule { }
