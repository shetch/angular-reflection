import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe = [];

  constructor(private location: Location, private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipe(id).subscribe(recipe => {
      this.recipe = recipe;
    },
      error =>
    console.warn(error));
  }

  cancel() {
    this.location.back();
  }

}