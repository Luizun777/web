import { Component, OnInit } from '@angular/core';
import { faCaretDown, faCaretRight, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit {

  experiencias: any = [
    {
      show: true,
      head: 'collapse-1',
      collaps: 'collaps-1',
      titulo: 'Servicio de Administración Tributaria (SAT)',
      puesto: 'Desarrollador Full Stack',
      fecha: 'Noviembre 2017 - Septiembre 2019',
      descripcion: '',
      actividades: ['Desarrollo de aplicación web para herramientas internas.','Configuración de servidores IIS','Desarrollo de páginas Web con Angular 6+', 'Desarrollo de peticiones api rest con .Net Core 2.0', 'Manejo de bases de datos con SQL', 'Realizar deploy de código a servidor de producción'],
      tags: ['html5','CSS3', 'Angular 6+','.Net Core 2.0', 'Git', 'JavaScript', 'typescript', 'Servidor IIS', 'Angular Material', 'PrimeNG','SQL']
    },
    {
      show: false,
      head: 'collapse-2',
      collaps: 'collaps-2',
      titulo: 'ARCSA Servicios S.A. de C.V.',
      puesto: 'Desarrollador front-end Angular',
      fecha: 'Septiembre 2019 - Actual',
      descripcion: '',
      actividades: ['Desarrollo de aplicación web para herramientas internas.', 'Mantenimiento y actualizaciones de proyectos', 'Integración con REST APIs y servicios en tiempo real utilizando websockets', 'Realizar deploy de código a servidor de producción'],
      tags: ['html5','SCSS', 'Angular 8+', 'JavaScript', 'typescript','git','github', 'Angular Material', 'PrimeNG']
    }
  ];

  iconFlecha = faCaretRight;
  iconSelect = faCaretDown;
  separador = faCode;

  constructor() { }

  ngOnInit() {
  }

  cambiar(index: number, show: boolean) {
    if (show) {
      this.experiencias[index].show = false;
      return
    }
    this.experiencias.forEach((exp: any, i: number) => exp.show = index === i);
  }

}
