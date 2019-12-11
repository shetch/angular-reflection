import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs';
import { Recipe } from '../models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url:string = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  constructor(private http: HttpClient) { }

  getRecipe(id): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url+id);
  }
}