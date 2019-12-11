import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs';
import { Listing } from '../models/Listing';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  url:string = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  
  constructor(private http: HttpClient) { }
  
  getListings(id): Observable<Listing[]> {
    return this.http.get<Listing[]>(this.url+id);
  }

}
