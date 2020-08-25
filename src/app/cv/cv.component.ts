import { Component, OnInit } from '@angular/core';
import { faAddressCard, faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  idCard = faAddressCard;
  experienia = faUserTie;

  constructor() { }

  ngOnInit() {
  }

}
