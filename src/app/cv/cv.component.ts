import { Component, OnInit } from '@angular/core';
import { faAddressCard, faBriefcase, faGamepad, faInfoCircle, faCloud } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  idCard = faAddressCard;
  experienia = faBriefcase;
  juegos = faGamepad;
  info = faInfoCircle;
  api = faCloud;

  constructor(
    public cvSrv: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cvSrv.getExperiencia();
  }

  paginador(pagina: string) {
    this.router.navigateByUrl(`/cv/${pagina}`);
  }

}
