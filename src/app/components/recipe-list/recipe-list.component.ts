import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  
  constructor() { 
    this.recipes = [
      new Recipe("banana Bread", "This is my favorite banana recipe! lorem ipsum hahahah; lorem ipsum hahahah lorem ipsum hahahah lorem ipsum hahahah. lorem ipsum hahahah My mom told me to go to the home"
      , null, null, null, 4,60),
      new Recipe("banana Bread", "This is my favorite banana recipe! lorem ipsum hahahah; lorem ipsum hahahah lorem ipsum hahahah lorem ipsum hahahah."
      , null, null, null, 4, 30), 
      new Recipe("banana Bread", "This is my favorite banana recipe! lorem ipsum hahahah"
      , null, null, null, 5, 10),
      new Recipe("banana Bread", "This is my favorite banana recipe! lorem ipsum hahahah"
      , null, null, null, 3, 20),
      new Recipe("banana Bread", "This is my favorite banana recipe! lorem ipsum hahahah, blablablablablablablablablablablabla"
      , null, null, null, 5, 50)
    ];
  }

  ngOnInit() {
  }

}
