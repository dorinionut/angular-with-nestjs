import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from '@angular/core/src/util';

@Injectable()
export class GoogleService {

  private url = '/api/google';

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<string> {
    return this.http.get(this.url, {
      responseType: 'text'
    });
  }
}
