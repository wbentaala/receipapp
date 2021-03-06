import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeSummaryComponent } from './components/recipe-summary/recipe-summary.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { EditNewRecipeComponent } from './components/edit-new-recipe/edit-new-recipe.component';

import { RecipeService } from './services/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeSummaryComponent,
    RecipeDetailsComponent,
    EditNewRecipeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'recipes',
        component : RecipeListComponent
      },
      {
        path: '',
        redirectTo: '/recipes', 
        pathMatch: 'full'
      }, 
      {
        path: 'recipes/:recipe_id',
        component: RecipeDetailsComponent
      }, 
      {
        path: 'editnewrecipe', 
        component: EditNewRecipeComponent
      }
    ]),
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
