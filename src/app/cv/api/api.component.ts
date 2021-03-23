import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  url: string = `${environment.urlApi}/api/info/exp`;

  constructor() { }

  ngOnInit(): void {
  }

}
