import { Component, OnInit } from '@angular/core';
import { faAngular, faNodeJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faServer } from '@fortawesome/free-solid-svg-icons';
import { CvService } from 'src/app/services/cv.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {

  url: string = `${environment.urlApi}/api/info/exp`;

  // icons
  iconAngular = faAngular;
  iconNode = faNodeJs;
  iconTerminal = faTerminal;
  iconServer = faServer;
  iconGithub = faGithub;

  constructor(
    public cvSrv: CvService
  ) { }

  ngOnInit() {
  }

}
