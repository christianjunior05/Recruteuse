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
import { RecupMdpComponent } from './recup-mdp/recup-mdp.component';
import { NewMdpComponent } from './new-mdp/new-mdp.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ConnexionAdminComponent } from './connexion-admin/connexion-admin.component';
import { TrouverEmploiComponent } from './trouver-emploi/trouver-emploi.component';

const routes: Routes = [
  {path:  '' , component: AccueilComponent},
  {path : 'connexion-recruteur' , component: ConnexionRecruteurComponent},
  {path : 'connexion-candidat' , component: ConnexionCandidatComponent},
  {path : 'espace-candidat', component:EspaceCandidatComponent},
  {path : 'espace-recruteur' , component: EspaceRecruteurComponent},
  {path : 'inscription-recruteur' , component: InscriptionRecruteurComponent},
  {path : 'inscription-candidat' , component: InscriptionCandidatComponent},
  {path : 'recup-mdp' , component: RecupMdpComponent},
  {path : 'new-mdp' , component: NewMdpComponent},
  {path : 'dashboard-admin' ,component :DashboardAdminComponent},
  {path : 'connexion-admin' , component:ConnexionAdminComponent},
  {path: 'trouver-emploi' , component:TrouverEmploiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],




exports: [RouterModule]
})
export class AppRoutingModule { }
