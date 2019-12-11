import { Component, OnInit, Input } from '@angular/core';
import { Meal } from 'src/app/models/Meal';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  @Input() meal: Meal;

  constructor() { }

  ngOnInit() {
  }

  showAlert() {
    alert(this.meal.idCategory);
  }
}
