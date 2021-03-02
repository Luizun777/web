import { Component, OnInit } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { faCaretDown, faCaretRight, faCode, faRedo, faSadTear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit {

  experiencias: any = [];
  errorApi: boolean;
  loading: boolean;

  // icons
  iconFlecha = faCaretRight;
  iconSelect = faCaretDown;
  separador = faCode;
  cargar = faRedo;
  faceSad = faSadTear;

  constructor(
    public cvSrv: CvService
  ) { }

  ngOnInit() {
    this.loading = false;
    this.errorApi = false;
    this.experiencias = this.cvSrv.experiencias;
    this.escucharServer();
  }

  cargarInfo() {
    this.cvSrv.getExperiencia();
  }

  cambiar(index: number, show: boolean) {
    if (show) {
      this.experiencias[index].show = false;
      return
    }
    this.experiencias.forEach((exp: any, i: number) => exp.show = index === i);
  }

  escucharServer() {
    this.cvSrv.changeExp.subscribe((error: boolean) => {
      this.errorApi = error;
      this.loading = false;
      this.experiencias = this.cvSrv.experiencias;
    });
  }

}
