import { Component, OnInit } from '@angular/core';
import { EmploiDetails } from 'src/app/offre-emploi/emploi-details.service';

@Component({
  selector: 'app-postuler-offre',
  templateUrl: './postuler-offre.component.html',
  styleUrls: ['./postuler-offre.component.css'],
})
export class PostulerOffreComponent implements OnInit {
  titre: string;
  ville: string;
  type: string;
  competence: string;
  description: string;
  mission: string;

  constructor(private emploiDetails: EmploiDetails) {}

  ngOnInit(): void {
    this.titre = this.emploiDetails.titre;
    this.ville = this.emploiDetails.ville;
    this.type = this.emploiDetails.type;
    this.competence = this.emploiDetails.competence;
    this.description = this.emploiDetails.description;
    this.mission = this.emploiDetails.mission;
  }
}
