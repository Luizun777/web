import { Component, OnInit } from '@angular/core';
import { faFilePdf, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  iconPdf = faFilePdf;
  iconLobby = faPizzaSlice;

  linkLobby: string = 'https://luizun777.github.io/lobby/';
  linkPDF: string = 'https://luizun777.github.io/pdf-merge/';

  constructor() { }

  ngOnInit(): void {
  }

}
