import { Injectable } from '@angular/core';
import { Sucrerie } from './sucrerie';
import { Bonbonniere } from './bonbonniere';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BonbecService {

  constructor() { }
  getBonbon(id: number): Observable<Sucrerie> {
    return of(Bonbonniere.find(sucrerie => sucrerie.id === id));
  }
  getBonbonniere(): Observable<Sucrerie[]> {
    return of(Bonbonniere);
  }
}
