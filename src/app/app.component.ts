import { Component } from '@angular/core';
import { Recipe } from './model/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipe: Recipe;

  constructor(){
    this.recipe = new Recipe("banana Bread", "This is my favorite banana recipe! lorem ipsum hahahah; lorem ipsum hahahah lorem ipsum hahahah lorem ipsum hahahah. lorem ipsum hahahah My mom told me to go to the home", null, null, null);

  }
}
