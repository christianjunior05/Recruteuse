import {Injectable} from '@angular/core';
import {Entrepot} from '../../model/entrepot.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EntrepotService {

  constructor(private http: HttpClient) {
  }
}
