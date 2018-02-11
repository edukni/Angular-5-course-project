import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe','Description','https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
    new Recipe('A test Recipe 2','Description 2','https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg')
  ];
  constructor() { }
  @Output() RecipeListSended= new EventEmitter<Recipe>();
  recipeSend: Recipe;


  ngOnInit() {
  }
  recipeItem(recipe:Recipe){
    this.recipeSend=recipe;
    this.RecipeListSended.emit(this.recipeSend);
    
  }



}
