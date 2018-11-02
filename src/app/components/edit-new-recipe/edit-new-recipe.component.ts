import { Recipe } from './../../model/recipe';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, Validators, ValidatorFn, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.css']
})
export class EditNewRecipeComponent implements OnInit {

  recipe_in_progress: Recipe;
  recipeForm: FormGroup;

  constructor(private recipe_service: RecipeService,
              private router: Router) { 
    this.recipe_in_progress = Recipe.createEmptyRecipe();
    this.buildFormGroup();
  }

  ngOnInit() {
  }

  buildFormGroup(){
    const fg = {
      'title': new FormControl(this.recipe_in_progress.title, [Validators.required, noTunaCasseroleValidator()]),
      'description': new FormControl(this.recipe_in_progress.description, [Validators.required]),
      'preparation_time': new FormControl(this.recipe_in_progress.preparation_time, [Validators.required, Validators.min(1)]),
      'feeds_this_many': new FormControl(this.recipe_in_progress.feeds_this_many, [Validators.required, Validators.min(1)]),
    };
    
    for(let i=0; i<this.recipe_in_progress.ingredients.length; i++){
      fg['ingredient' + i] = new FormControl(this.recipe_in_progress.ingredients[i].ingredient, [Validators.required]);
      fg['measure' + i] = new FormControl(this.recipe_in_progress.ingredients[i].measure, [Validators.required]);
    }

    for(let i=0; i<this.recipe_in_progress.instructions.length; i++){
      fg['instruction_' + i] = new FormControl(this.recipe_in_progress.instructions[i].instruction, [Validators.required]);
    }

    this.recipeForm = new FormGroup(fg);
  }

  public addIngredientPressed(){
    if(!this.recipe_in_progress.ingredients){
      this.recipe_in_progress.ingredients = [{ ingredient : null, measure: null}];
    }
    else{
      this.recipe_in_progress.ingredients.push({ingredient: null, measure: null});
    }
    this.buildFormGroup();
  }

  public removeIngredient(index){
    this.recipe_in_progress.ingredients.splice(index, 1);
    this.buildFormGroup();
  }

  public addInstructionPressed(){
    if(!this.recipe_in_progress.instructions){
      this.recipe_in_progress.instructions = [ { instruction : null, photo : null }];
    }
    else{
      this.recipe_in_progress.instructions.push({ instruction : null, photo : null });
    }
    this.buildFormGroup();
  }

  public removeInstruction(index){
    this.recipe_in_progress.instructions.splice(index, 1);
    this.buildFormGroup();
  }

  addRecipeClicked(){  
    console.log(this.recipe_in_progress);
    this.recipe_service.addNewRecipe(this.recipe_in_progress)
    .then((recipe) => {
      this.router.navigate(['recipes', recipe.id]);
    });
  }

}

export function noTunaCasseroleValidator(): ValidatorFn{
  return (control: AbstractControl): { [key: string]: any} => {
    if(control.value.toLowerCase().indexOf('tuna') !== -1
    && control.value.toLowerCase().indexOf('casserole') !== -1){
      return {'noTunaCasserole': { value: control.value} };
    }
    return null;
  }
}
