import { Component, OnInit } from '@angular/core';
import { faAngular, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {

  // icons
  iconAngular = faAngular;
  iconNode = faNodeJs;
  iconTerminal = faTerminal;

  constructor(
    public cvSrv: CvService
  ) { }

  ngOnInit() {
  }

}
