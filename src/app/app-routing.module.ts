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
import { OffreEmploiComponent } from './offre-emploi/offre-emploi.component';
import { PostulerOffreComponent } from './postuler-offre/postuler-offre.component';
import { TalentsComponent } from './talents/talents.component';
import { ProfilCComponent } from './profil-c/profil-c.component';
import { PublierOffreComponent } from './publier-offre/publier-offre.component';
import { RechercheEmploiComponent } from './recherche-emploi/recherche-emploi.component';
import { PremiumComponent } from './premium/premium.component';
import { ProfilRComponent } from './profil-r/profil-r.component';
import { UserComponent } from './user/user.component';
import { NotifsComponent } from './notifs/notifs.component';
import { StatsComponent } from './stats/stats.component';
import { CandidatComponent } from './candidat/candidat.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecruteurComponent } from './recruteur/recruteur.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'connexion-recruteur', component: ConnexionRecruteurComponent },
  { path: 'connexion-candidat', component: ConnexionCandidatComponent },
  { path: 'espace-candidat', component: EspaceCandidatComponent },
  { path: 'espace-recruteur', component: EspaceRecruteurComponent },
  { path: 'inscription-recruteur', component: InscriptionRecruteurComponent },
  { path: 'inscription-candidat', component: InscriptionCandidatComponent },
  { path: 'offre-emploi', component: OffreEmploiComponent },
  { path: 'recup-mdp', component: RecupMdpComponent },
  { path: 'new-mdp', component: NewMdpComponent },
  { path: 'dashboard-admin', component: DashboardAdminComponent },
  { path: 'connexion-admin', component: ConnexionAdminComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'postuler-offre', component: PostulerOffreComponent },
  { path: 'TalentsComponent', component: TalentsComponent },
  { path: 'profil-c', component: ProfilCComponent },
  { path: 'publier-offre', component: PublierOffreComponent },
  { path: 'talents', component: TalentsComponent },
  { path: 'recherche-emploi', component: RechercheEmploiComponent },
  { path: 'premium', component: PremiumComponent },
  { path: 'profil-r', component: ProfilRComponent },
  { path: 'dashboard-admin-users', component: UserComponent },
  { path: 'dashboard-admin-stats', component: StatsComponent },
  { path: 'dashboard-admin-notifs', component: NotifsComponent },
  { path: 'candidat', component: CandidatComponent },
  { path: 'recruteur', component:RecruteurComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule],
})
export class AppRoutingModule {}
