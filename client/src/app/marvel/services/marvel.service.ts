import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICharacter } from '../../../../../common/model/character.interface';

@Injectable()
export class MarvelService {

  private url = '/api/marvel/characters';

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>(this.url);
  }

  getCharacter(id): Observable<ICharacter> {
    return this.http.get<ICharacter>(`${this.url}/${id}`);
  }
}
