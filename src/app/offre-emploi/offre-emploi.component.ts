import { Component, OnInit } from '@angular/core';
import { EMPLOIS } from './list-emplois';
import { Emplois } from './emplois';

@Component({
  selector: 'app-offre-emploi',
  templateUrl: './offre-emploi.component.html',
  styleUrls: ['./offre-emploi.component.css']
})
export class OffreEmploiComponent implements OnInit {
  emploiListe : Emplois []  = EMPLOIS;
  constructor(){}
  ngOnInit(): void {
    
  }
}
