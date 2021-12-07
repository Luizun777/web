import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  cedulaLocal: any = [{
    anioreg: 2021,
    carArea: null,
    carCons: null,
    carNivel: null,
    carSarea: null,
    curp: null,
    desins: 'UNIVERSIDAD INTERAMERICANA PARA EL DESARROLLO CAMPUS TAXQUEÑA',
    foja: null,
    idCedula: '12482375',
    inscons: null,
    insedo: null,
    libro: null,
    materno: "TINAJERO",
    maternoM: null,
    nombre: "LUIS",
    nombreM: null,
    numero: null,
    paterno: "ACOSTA",
    paternoM: null,
    sexo: "1",
    tipo: "C1",
    titulo: "LICENCIATURA EN INGENIERÍA EN SISTEMAS DE INFORMACIÓN"
  }]
  experiencias: any = [];
  @Output() changeExp: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private http: HttpClient,
  ) { }

  getExperiencia() {
    return this.http.get(`${environment.urlApi}/api/info/exp`).subscribe((exp: any) => {
      this.experiencias = exp.result;
      this.changeExp.emit(false);
    }, () => this.changeExp.emit(true));
  }

  getCedula(data: any) {
    return this.http.post(`https://cedulaprofesional.sep.gob.mx/cedula/buscaCedulaJson.action`, data);
  }
}
