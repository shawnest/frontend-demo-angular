import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Advertisement } from '../models/Advertisement';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:8080/api/users"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  getUserAdvertisements(id: Number): Observable<Advertisement[]>{
    return this.http.get<Advertisement[]>(this.url + "/" + id + "/advertisements");
  }
}
