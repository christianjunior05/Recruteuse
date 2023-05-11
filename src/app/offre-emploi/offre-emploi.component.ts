import { Component, OnInit } from '@angular/core';
import { EMPLOIS } from './list-emplois';
import { Emplois } from './emplois';

@Component({
  selector: 'app-offre-emploi',
  templateUrl: './offre-emploi.component.html',
  styleUrls: ['./offre-emploi.component.css'],
})
export class OffreEmploiComponent implements OnInit {
  emploiListe: Emplois[] = EMPLOIS;
  constructor() {}
  ngOnInit(): void {
    window.addEventListener('load', () => {
      var offres = document.getElementsByClassName('job-offer');

      for (let i = 0; i < offres.length; i++) {
        offres.item(i).addEventListener('click', () => {
          console.log(this.emploiListe[i]);
          document.getElementById('titre').textContent =
            this.emploiListe[i].titre;
          document.getElementById('ville').textContent =
            this.emploiListe[i].lieu;
          document.getElementById('type').textContent =
            this.emploiListe[i].typePoste;
          document.getElementById('competence').textContent =
            this.emploiListe[i].competences;
          document.getElementById('description').textContent =
            this.emploiListe[i].descriptionPoste;
          document.getElementById('mission').textContent =
            this.emploiListe[i].missions;
          document.getElementById('postuler').style.display = 'block';
        });
      }
    });
  }
}
