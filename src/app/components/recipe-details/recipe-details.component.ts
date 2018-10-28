import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { RecipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;

  constructor(private route: ActivatedRoute, 
    private location :Location,
    private recipe_service: RecipeService) { 
      console.log(this.recipe);
    }

  ngOnInit() : void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const recipe_id = parseInt(params.get('recipe_id'), 10);
      this.recipe_service.getRecipeById(recipe_id)
        .then((recipe)=>{
        console.log(recipe);
        this.recipe = recipe
      });
    });
    
  }

  goBackPressed(){
    this.location.back();
  }

}
