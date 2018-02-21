import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

 @ViewChild('nameInput') nameInputRef: ElementRef;
 @ViewChild('amountInput') nameAmountRef: ElementRef;
 @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() {

   }

  ngOnInit() {
  }
  addRecipe(){
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.nameAmountRef.nativeElement.value)
    this.ingredientAdded.emit(newIngredient);

  }

}
