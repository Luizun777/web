import { Component, OnInit } from '@angular/core';
import { faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-yo',
  templateUrl: './yo.component.html',
  styleUrls: ['./yo.component.scss']
})
export class YoComponent implements OnInit {

  year: number = 1996;
  edad: number;
  separador = faCode;
  sobreMi: string = 'Trabajo como desarrollador de páginas web usando front con Angular, .Net Core 2.0 para el back aunque también he usado Node.js básico y como base de datos SQL y MongoDB.';

  // Redes
  iconGitHub = faGithub;
  iconFacebook = faFacebook;
  iconLinkedin = faLinkedin;
  iconCorreo = faEnvelope;

  // links
  linkGitHub: string = 'https://github.com/Luizun777';
  linkFacebook: string = 'https://www.facebook.com/luisun.acosta/';
  linkLinkedin: string = 'https://www.linkedin.com/in/luis-acosta-tinajero-317831191/';

  constructor() { }

  ngOnInit() {
    this.calcularEdad();
  }

  calcularEdad() {
    const fecha = new Date().getFullYear();
    this.edad = fecha - this.year;
  }

}
