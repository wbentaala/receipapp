import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  recipe_in_progress : Recipe;
  current_style : any;
  current_size : any;

  recipes_loaded: boolean;
  no_recipes: boolean;
  
  constructor(private router: Router, 
    private recipe_service: RecipeService) { 
    this.current_style = { 'darkbg': false};
    this.current_size = { 'font-size': '150%' };
    
    
  }

  ngOnInit(){
    this.recipe_service.getAllRecipes().then(
      (recipes)=> {
        this.recipes = recipes;
        this.recipes_loaded = true;
        if(!this.recipes)
          this.no_recipes = true;
      });
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
