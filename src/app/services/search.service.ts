import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs';
import { Search } from '../models/Search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url:string = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  constructor(private http: HttpClient) { }

  getResults(keywords): Observable<Search[]> {
    return this.http.get<Search[]>(this.url+keywords);
  }

}
