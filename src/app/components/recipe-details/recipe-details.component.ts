import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;
  recipes: Recipe[];

  constructor(private route: ActivatedRoute, 
    private location :Location) { 
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

  ngOnInit() : void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recipe = this.findRecipeById(parseInt(params.get('recipe_id'), 10));
    });
  }

  findRecipeById(id: number): Recipe{
    for(let recipe of this.recipes){
      if (recipe.id == id){
        return recipe;
      }
    }
    return null;
  }

  goBackPressed(){
    this.location.back();
  }

}
