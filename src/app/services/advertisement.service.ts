import { Injectable } from '@angular/core';
import { Advertisement } from '../models/advertisement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  private url = 'http://localhost:8080/api/advertisements'

  constructor(private http:HttpClient) { }

  getAdvertisements() : Observable<Advertisement[]> {
    return this.http.get<Advertisement[]>(this.url);
  }

  postAdvertisement(ad : Advertisement): Observable<Advertisement> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<Advertisement>(this.url, ad, httpOptions);
  }
}
