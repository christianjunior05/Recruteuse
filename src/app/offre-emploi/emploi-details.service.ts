import { Injectable } from '@angular/core';

// @Injectable()
@Injectable({
  providedIn: 'root',
})
export class EmploiDetails {
  titre: string;
  ville: string;
  type: string;
  competence: string;
  description: string;
  mission: string;
}
