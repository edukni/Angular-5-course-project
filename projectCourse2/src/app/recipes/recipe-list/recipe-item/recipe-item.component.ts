import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }
  @Input('recipe') recipe:Recipe;
  @Output() onRecipeItem = new EventEmitter<Recipe>();

  ngOnInit() {
  }

  itemData(recipe:Recipe){
    this.onRecipeItem.emit(recipe);
  }
}
