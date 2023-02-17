import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ConnexionRecruteurComponent } from './connexion-recruteur/connexion-recruteur.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionCandidatComponent } from './connexion-candidat/connexion-candidat.component';
import { EspaceCandidatComponent } from './espace-candidat/espace-candidat.component';
import { EspaceRecruteurComponent } from './espace-recruteur/espace-recruteur.component';
import { InscriptionRecruteurComponent } from './inscription-recruteur/inscription-recruteur.component';
import { InscriptionCandidatComponent } from './inscription-candidat/inscription-candidat.component';
import { JobsComponent } from './jobs/jobs.component';
import { RecupMdpComponent } from './recup-mdp/recup-mdp.component';
import { NewMdpComponent } from './new-mdp/new-mdp.component';

const routes: Routes = [
  {path: 'accueil' , component: AccueilComponent},
  {path :'connexion-recruteur' , component: ConnexionRecruteurComponent},
  {path :'connexion-candidat' , component: ConnexionCandidatComponent},
  {path : 'espace-candidat', component:EspaceCandidatComponent},
  {path : 'espace-recruteur' , component: EspaceRecruteurComponent},
  {path : 'inscription-recruteur' , component: InscriptionRecruteurComponent},
  {path : 'inscription-candidat' , component: InscriptionCandidatComponent},
  {path :'jobs' , component:JobsComponent},
  {path : 'recup-mdp' , component: RecupMdpComponent},
  {path : 'new-mdp' , component: NewMdpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],




exports: [RouterModule]
})
export class AppRoutingModule { }
