import { Component } from '@angular/core';
import { Carattere } from './carattere';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {

  characters: Carattere[] = [
    { nome: "luca", cognome: "rossi" },
    { nome: "simone", cognome: "bianchi" },
    { nome: "marco", cognome: "verdi" },
    { nome: "andrea", cognome: "rossi" },
    { nome: "stefano", cognome: "marchesi" },
    { nome: "michele", cognome: "bianchi" },
    { nome: "lorenzo", cognome: "rossi" },
    { nome: "maria", cognome: "marchesi" },
    { nome: "michela", cognome: "verdi" },
    { nome: "paolo", cognome: "rossi" },
    { nome: "giulia", cognome: "bianchi" },
    { nome: "mario", cognome: "marchesi" },
    { nome: "silvia", cognome: "verdi" },

  ];
}
