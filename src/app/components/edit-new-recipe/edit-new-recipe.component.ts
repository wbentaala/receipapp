import { Recipe } from './../../model/recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.css']
})
export class EditNewRecipeComponent implements OnInit {

  recipe_in_progress: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
