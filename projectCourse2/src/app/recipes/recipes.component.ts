import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeBind:Recipe= new Recipe("name", "aksdas", "kasdkas");
  
  constructor() { }

  ngOnInit() {
  }

  RecipeList(recipe:Recipe){
    this.recipeBind=recipe;

  }
}
