import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeticionesSOAPService {



  constructor(private http: HttpClient) { }

  public get(url: string, options?): Observable<any> {
    return this.http.get(url, options);
  }
}
