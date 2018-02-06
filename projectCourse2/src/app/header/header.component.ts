import { Component, Output, EventEmitter } from "@angular/core";


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent {

@Output() activeRecipe = new EventEmitter<boolean>();
@Output() activeShopping = new EventEmitter<boolean>();
booleanVar:boolean = true;

    onActiveRecipe(){
        this.booleanVar ? this.booleanVar=false : this.booleanVar;
        this.activeRecipe.emit(this.booleanVar);
    }


    onActiveShopping(){
        this.booleanVar ? this.booleanVar: this.booleanVar=true ;
        
        this.activeShopping.emit(this.booleanVar);
    }
}