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
  disable_add_new_recipe: boolean;

  constructor(private recipe_service: RecipeService,
              private router: Router) { 
    this.recipe_in_progress = Recipe.createEmptyRecipe();
    this.disable_add_new_recipe = true;
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

  validateForm(event){
    this.disable_add_new_recipe = true;
    console.log(event.target.value);
    if(!this.recipe_in_progress.title || this.recipe_in_progress.title.length < 1)
      return;
    if(!this.recipe_in_progress.description || this.recipe_in_progress.description.length < 1)  
      return;
    const feeds: number = parseInt('' + this.recipe_in_progress.feeds_this_many, 10);
    if(isNaN(feeds) || feeds < 1 || feeds > 1000)
      return;
    const preptime: number = parseInt('' + this.recipe_in_progress.preparation_time, 10);
    if(isNaN(feeds) || preptime < 1)
      return;
    for (const instr of this.recipe_in_progress.instructions){
      if(!instr.instruction || instr.instruction.length < 1)
        return;
    }
    for (const ingr of this.recipe_in_progress.ingredients){
      if(!ingr.ingredient || ingr.ingredient.length < 1)
        return;
      const measure = parseInt(ingr.measure, 10);
      if(measure<1 || measure>100)
        return;
    }

    this.disable_add_new_recipe = false;
  }
}
