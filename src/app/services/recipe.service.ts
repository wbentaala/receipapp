import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[];

  constructor() { 
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

  public getAllRecipes() : Promise<Recipe[]>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.recipes);   
      }, 2000);
       
    })
  }

  public getRecipeById(recipe_id: number) : Promise<Recipe> {
    
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        for (const recipe of this.recipes){
        if (recipe.id == recipe_id){
          resolve(recipe);
          return;
        }
      }  
      reject(Error('No Recipe exists with that id'));
    }, 1000);
    });
  }
}
