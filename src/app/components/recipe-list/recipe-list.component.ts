import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[];
  recipe_in_progress : Recipe;
  current_style : any;
  
  constructor() { 
    this.current_style = { 'darkbg': false};
    this.recipe_in_progress = Recipe.createEmptyRecipe();
    this.recipes = [
      new Recipe("banana Bread", "This is my favorite banana recipe! lorem ipsum hahahah; lorem ipsum hahahah lorem . lorem ipsum hahahah My mom told me to go to the home"
      , null, null, null, 4,60),
      new Recipe("banana Bread", "This is my favorite banana recipe! lorem ipsum hahahah; lorem ipsum hahahah lorem ipsum hahahah lorem ipsum hahahah."
      , null, null, null, 4, 30), 
      /* new Recipe("banana Bread", "This is my favorite banana recipe! lorem ipsum hahahah"
      , null, null, null, 5, 10) */
      /* new Recipe("banana Bread", "This is my favorite banana recipe! lorem ipsum hahahah"
      , null, null, null, 3, 20),
      new Recipe("banana Bread", "This is my favorite banana recipe! lorem ipsum hahahah, blablablablablablablablablablablabla"
      , null, null, null, 5, 50) */
    ];
  }

  public addRecipeClicked() {
    console.log(JSON.stringify(this.recipe_in_progress));
    this.recipes.unshift(this.recipe_in_progress);
    this.recipe_in_progress = Recipe.createEmptyRecipe();
  }

  public zoomInOnClick(recipe){
    console.log(JSON.stringify(recipe));
  }

  public toggleOn(){
    console.log(this.current_style);
    const newvalue = !this.current_style['darkbg'];
    this.current_style = { 'darkbg': newvalue};
  }

}
