import { Component, OnInit } from '@angular/core';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

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
      fecha: 'Noviembre 2017 - Septiembre 2019',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, natus? Sint nisi minus ea nemo libero accusantium itaque ad! Vero voluptatem eveniet, deleniti quia ullam fuga recusandae! Praesentium, nam rerum.',
      tags: ['html5','CSS3', 'Angular 6+','.Net Core 2.0', 'Git', 'JavaScript', 'typescript', 'Servidor IIS']
    },
    {
      show: false,
      head: 'collapse-2',
      collaps: 'collaps-2',
      titulo: 'ARCSA Servicios S.A. de C.V.',
      fecha: 'Septiembre 2019 - Actual',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, natus? Sint nisi minus ea nemo libero accusantium itaque ad! Vero voluptatem eveniet, deleniti quia ullam fuga recusandae! Praesentium, nam rerum.',
      tags: ['html5','CSS3', 'Angular 8+', 'JavaScript', 'typescript','git','github']
    }
  ];

  iconFlecha = faCaretRight;
  iconSelect = faCaretDown;

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
