import { Component, OnInit } from '@angular/core';
import { EMPLOIS } from './list-emplois';
import { Emplois } from './emplois';
import { EmploiDetails } from './emploi-details.service';

@Component({
  selector: 'app-offre-emploi',
  templateUrl: './offre-emploi.component.html',
  styleUrls: ['./offre-emploi.component.css'],
})
export class OffreEmploiComponent implements OnInit {
  emploiListe: Emplois[] = EMPLOIS;
  titre: string;
  ville: string;
  type: string;
  competence: string;
  description: string;
  mission: string;

  constructor(private emploiDetails: EmploiDetails) {}
  ngOnInit(): void {
    window.addEventListener('mousemove', () => {
      var offres = document.getElementsByClassName('job-offer');

      for (let i = 0; i < offres.length; i++) {
        offres.item(i).addEventListener('click', () => {
          // console.log(this.emploiListe[i]);
          document.getElementById('titre').textContent =
            this.emploiListe[i].titre;
          this.titre = document.getElementById('titre').textContent;
          document.getElementById('ville').textContent =
            this.emploiListe[i].lieu;
          this.ville = document.getElementById('ville').textContent;
          document.getElementById('type').textContent =
            this.emploiListe[i].typePoste;
          this.type = document.getElementById('type').textContent;
          document.getElementById('competence').textContent =
            this.emploiListe[i].competences;
          this.competence = document.getElementById('competence').textContent;
          document.getElementById('description').textContent =
            this.emploiListe[i].descriptionPoste;
          this.description = document.getElementById('description').textContent;
          document.getElementById('mission').textContent =
            this.emploiListe[i].missions;
          this.mission = document.getElementById('mission').textContent;
          document.getElementById('postuler').style.display = 'block';
        });
      }
    });
  }

  postuler() {
    this.emploiDetails.titre = this.titre;
    this.emploiDetails.ville = this.ville;
    this.emploiDetails.type = this.type;
    this.emploiDetails.competence = this.competence;
    this.emploiDetails.description = this.description;
    this.emploiDetails.mission = this.mission;
  }
}
