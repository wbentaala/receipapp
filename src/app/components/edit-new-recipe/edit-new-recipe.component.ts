import { Recipe } from './../../model/recipe';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.css']
})
export class EditNewRecipeComponent implements OnInit {

  recipe_in_progress: Recipe;
  constructor(private recipe_service: RecipeService,
              private router: Router) { 
    this.recipe_in_progress = Recipe.createEmptyRecipe();
  }

  ngOnInit() {
  }

  public addIngredientPressed(){
    if(!this.recipe_in_progress.ingredients){
      this.recipe_in_progress.ingredients = [{ ingredient : null, measure: null}];
    }
    else{
      this.recipe_in_progress.ingredients.push({ingredient: null, measure: null});
    }
  }

  public removeIngredient(index){
    this.recipe_in_progress.ingredients.splice(index, 1);
  }

  public addInstructionPressed(){
    if(!this.recipe_in_progress.instructions){
      this.recipe_in_progress.instructions = [ { instruction : null, photo : null }];
    }
    else{
      this.recipe_in_progress.instructions.push({ instruction : null, photo : null });
    }
  }

  public removeInstruction(index){
    this.recipe_in_progress.instructions.splice(index, 1);
  }

  addRecipeClicked(){  
    console.log(this.recipe_in_progress);
    this.recipe_service.addNewRecipe(this.recipe_in_progress)
    .then((recipe) => {
      this.router.navigate(['recipes', recipe.id]);
    });
  }
}
