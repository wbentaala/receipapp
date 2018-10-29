import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { Http } from '@angular/http';
import { promise } from 'protractor';

const recipe_server = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  constructor(private http: Http) { 
    
  }

  public getAllRecipes() : Promise<Recipe[]>{
    return this.http.get(
      recipe_server + '/v1/recipes.json')
      .toPromise()
      .then((response)=> response.json().data as Recipe[]);
  }

  public getRecipeById(recipe_id: number) : Promise<Recipe> {
    
    return this.http.get(
      recipe_server + `/v1/recipes/${recipe_id}.json`)
      .toPromise()
      .then((response) => response.json().data as Recipe);
  }

  public addNewRecipe(recipe: Recipe): Promise<Recipe>{
     return this.http.put(recipe_server + '/v1/recipes.json', recipe)
     .toPromise()
     .then((response) => response.json().data as Recipe)
     .catch(this.handleError);
  }

  private handleError(error: any) : Promise<any>{
    return Promise.reject(error.Message || error);
  }

}
