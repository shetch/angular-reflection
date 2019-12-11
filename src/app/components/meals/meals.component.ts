import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { Meal } from '../../models/Meal';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {
  meals: Meal[] = [];

  constructor(private mealService: MealService) { }

  ngOnInit() {
    this.mealService.getMeals().subscribe(meals => {
      this.meals = meals;
    },
      error =>
    console.warn(error));
  }
}
