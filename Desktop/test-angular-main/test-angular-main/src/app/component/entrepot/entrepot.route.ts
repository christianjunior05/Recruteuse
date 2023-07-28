import {Injectable} from '@angular/core';
import {Resolve, Routes} from '@angular/router';
import {Entrepot} from '../../model/entrepot.model';
import {EntrepotComponent} from "./entrepot.component";
import {EntrepotService} from "./entrepot.service";
import {EntrepotUpdateComponent} from "./entrepot-update/entrepot-update.component";

@Injectable({providedIn: 'root'})
export class EntrepotResolve {
  constructor(entrepotService: EntrepotService) {
  }
  getNewEntity(): Entrepot {
    return new Entrepot();
  }
}

export const entrepotRoute: Routes = [
  {
    path: '',
    component: EntrepotComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },

  {
    path: 'detail/:id',
    component: EntrepotUpdateComponent,
    resolve: {
      entrepot: EntrepotResolve,
    },
  },

  {
    path: 'new',
    component: EntrepotUpdateComponent,
    resolve: {
      entrepot: EntrepotResolve,
    },
  },

  {
    path: 'update/:id',
    component: EntrepotUpdateComponent,
    resolve: {
      entrepot: EntrepotResolve,
    },
  }
];
