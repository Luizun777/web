import { Component, OnInit } from '@angular/core';
import { faXbox, faSteam } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss']
})
export class JuegosComponent implements OnInit {

  // iconos
  iconXbox = faXbox;
  iconSteam = faSteam;

  // link
  linkXbox: string = 'https://account.xbox.com/es-mx/profile?gamertag=Luizun';
  linkSteam: string = 'https://steamcommunity.com/id/solid777/';

  constructor() { }

  ngOnInit() {
  }

}
