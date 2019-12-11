import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsComponent } from './components/meals/meals.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { AboutComponent } from './components/about/about.component';
import { ListingsComponent } from './components/listings/listings.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [
  { path: '', component: MealsComponent },
  { path: 'meals', component: MealsComponent },
  { path: 'meals/:id' , component: ListingsComponent}, 
  { path: 'recipe/:id' , component: RecipeComponent}, 
  { path: 'search/:keywords' , component: SearchResultsComponent}, 
  { path: 'about', component: AboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent]