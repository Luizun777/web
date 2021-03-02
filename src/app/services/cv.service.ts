import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvService {

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
}
