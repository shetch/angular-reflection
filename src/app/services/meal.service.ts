import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs';
import { Meal } from '../models/Meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  url:string = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  constructor(private http: HttpClient) { }

  /* getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.url).pipe(map(object =>
    object.categories.map( data =>
    new Meal().deserialize(data))));
  } */

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.url);
  }

}
