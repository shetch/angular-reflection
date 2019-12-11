import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealsComponent } from './components/meals/meals.component';
import { SearchComponent } from './components/search/search.component';
import { MealComponent } from './components/meal/meal.component';
import { AboutComponent } from './components/about/about.component';
import { ListingComponent } from './components/listing/listing.component';
import { ListingsComponent } from './components/listings/listings.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    SearchComponent,
    MealComponent,
    AboutComponent,
    ListingComponent,
    ListingsComponent,
    RecipeComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
