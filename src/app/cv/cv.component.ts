import { Component, OnInit } from '@angular/core';
import { faAddressCard, faUserTie, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  idCard = faAddressCard;
  experienia = faUserTie;
  juegos = faGamepad;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  paginador(pagina: string) {
    this.router.navigateByUrl(`/cv/${pagina}`);
  }

}
