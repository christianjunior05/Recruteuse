import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Aos } from 'aos';


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
import { OffreEmploiComponent } from './offre-emploi/offre-emploi.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PostulerOffreComponent } from './postuler-offre/postuler-offre.component';
import { PublierOffreComponent } from './publier-offre/publier-offre.component';
import { TalentsComponent } from './talents/talents.component';
import { MyOffresComponent } from './my-offres/my-offres.component';
import { NavCComponent } from './nav-c/nav-c.component';
import { NavRComponent } from './nav-r/nav-r.component';
import { RechercheEmploiComponent } from './recherche-emploi/recherche-emploi.component';
import { ProfilRComponent } from './profil-r/profil-r.component';
import { PremiumComponent } from './premium/premium.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormationsComponent } from './formations/formations.component';



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
    OffreEmploiComponent,
    PostulerOffreComponent,
    NavbarComponent,
    FooterComponent,
    PublierOffreComponent,
    TalentsComponent,
    MyOffresComponent,
    NavCComponent,
    NavRComponent,
    RechercheEmploiComponent,
    ProfilRComponent,
    PremiumComponent,
    PageNotFoundComponent,
    FormationsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
