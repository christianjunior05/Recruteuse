import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionCandidatComponent } from './inscription-candidat/inscription-candidat.component';
import { InscriptionRecruteurComponent } from './inscription-recruteur/inscription-recruteur.component';
import { EspaceCandidatComponent } from './espace-candidat/espace-candidat.component';
import { EspaceRecruteurComponent } from './espace-recruteur/espace-recruteur.component';
import { ConnexionRecruteurComponent } from './connexion-recruteur/connexion-recruteur.component';
import { ConnexionCandidatComponent } from './connexion-candidat/connexion-candidat.component';
import { RecupMdpComponent } from './recup-mdp/recup-mdp.component';
import { NewMdpComponent } from './new-mdp/new-mdp.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ConnexionAdminComponent } from './connexion-admin/connexion-admin.component';
import { ProfilCComponent } from './profil-c/profil-c.component';
import { ProfilEditComponent } from './profil-edit/profil-edit.component';
<<<<<<< Updated upstream
import { PublierOffreComponent } from './publier-offre/publier-offre.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { PostulerOffreComponent } from './postuler-offre/postuler-offre.component';
=======
import { TrouverEmploiComponent } from './trouver-emploi/trouver-emploi.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    InscriptionCandidatComponent,
    InscriptionRecruteurComponent,
    EspaceCandidatComponent,
    EspaceRecruteurComponent,
    ConnexionRecruteurComponent,
    ConnexionCandidatComponent,
    RecupMdpComponent,
    NewMdpComponent,
    DashboardAdminComponent,
    ConnexionAdminComponent,
    ProfilCComponent,
    ProfilEditComponent,
<<<<<<< Updated upstream
    OffresEmploiComponent,
    PostulerOffreComponent
=======
    TrouverEmploiComponent,
    OffresEmploiComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
