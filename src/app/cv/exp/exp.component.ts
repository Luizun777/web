import { Component, OnInit } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { faCaretDown, faCaretRight, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit {

  experiencias: any = [];

  iconFlecha = faCaretRight;
  iconSelect = faCaretDown;
  separador = faCode;

  constructor(
    public cvSrv: CvService
  ) { }

  ngOnInit() {
    this.cargarInfo();
    this.escucharServer();
  }

  cargarInfo() {
    this.cvSrv.experiencias.length ? this.experiencias = this.cvSrv.experiencias : this.cvSrv.getExperiencia();
  }

  cambiar(index: number, show: boolean) {
    if (show) {
      this.experiencias[index].show = false;
      return
    }
    this.experiencias.forEach((exp: any, i: number) => exp.show = index === i);
  }

  escucharServer() {
    this.cvSrv.changeExp.subscribe((change: any) => this.experiencias = change);
  }

}
