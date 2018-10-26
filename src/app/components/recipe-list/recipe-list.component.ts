import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[];
  recipe_in_progress : Recipe;
  current_style : any;
  current_size : any;
  
  constructor(private router: Router) { 
    this.current_style = { 'darkbg': false};
    this.current_size = { 'font-size': '150%' };
    this.recipe_in_progress = Recipe.createEmptyRecipe();
    this.recipes = [
      new Recipe(1, "banana Bread", "This is my favorite banana recipe! lorem ipsum hahahah; lorem ipsum hahahah lorem . lorem ipsum hahahah My mom told me to go to the home"
      , [
        {"measure": "1 lb", "ingredient": " asparagus"},
        {"measure": "1 1/2 tbsp", "ingredient": "olive oil"},
        {"measure": "1/2 tsp", "ingredient": "kosher salt"}
    ],
    [
      {"instruction": "Preheat oven to 425°F.", "photo": null},
      {"instruction": "Cut off the woody bottom part of the asparagus spears and discard.", "photo": null},
      {"instruction": "Place asparagus on foil-lined baking sheet and drizzle with olive oil.", "photo": null}
    ], null, 4,60, null),
      new Recipe(2, "banana Bread", "This is my favorite banana recipe! lorem ipsum hahahah; lorem ipsum hahahah lorem ipsum hahahah lorem ipsum hahahah."
    ,[
        {"measure": "1 lb", "ingredient": " asparagus"},
        {"measure": "1 1/2 tbsp", "ingredient": "olive oil"},
        {"measure": "1/2 tsp", "ingredient": "kosher salt"}
    ],
    [
      {"instruction": "Preheat oven to 425°F.", "photo": null},
      {"instruction": "Cut off the woody bottom part of the asparagus spears and discard.", "photo": null},
      {"instruction": "Place asparagus on foil-lined baking sheet and drizzle with olive oil.", "photo": null}
     ], null, 4, 30, null), 
      new Recipe(3, "banana Bread", "This is my favorite banana recipe! lorem ipsum hahahah"
    ,[
        {"measure": "1 lb", "ingredient": " asparagus"},
        {"measure": "1 1/2 tbsp", "ingredient": "olive oil"},
        {"measure": "1/2 tsp", "ingredient": "kosher salt"}
    ],
    [
      {"instruction": "Preheat oven to 425°F.", "photo": null},
      {"instruction": "Cut off the woody bottom part of the asparagus spears and discard.", "photo": null},
      {"instruction": "Place asparagus on foil-lined baking sheet and drizzle with olive oil.", "photo": null}
    ], null, 5, 10, null)
    
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

  public userClickedOnRecipe(recipe_id){
    this.router.navigateByUrl('/recipes/' + recipe_id);
  }

  public toggleOn(){
    console.log(this.current_style);
    const newvalue = !this.current_style['darkbg'];
    this.current_style = { 'darkbg': newvalue};
  }

  public toggleFontSize(){
    console.log(this.current_size);
    const newvalue = this.current_size['font-size'];
    if(newvalue == '150%'){
      this.current_size = { 'font-size' : '175%'};
    }
    else{
      this.current_size = { 'font-size' : '150%' };
    } 
  }

  public addNewRecipe(){
    this.router.navigateByUrl('/editnewrecipe');
  }

}
