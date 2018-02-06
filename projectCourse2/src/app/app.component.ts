import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  varBoolean:boolean=false;
  onActiveRecipe(varBoolean:boolean){
    this.varBoolean=varBoolean;
    console.log("On active recipe "+ varBoolean);
    
  }

  onActiveShopping(varBoolean:boolean){
    this.varBoolean=varBoolean;    
    console.log("On active Shopping "+ varBoolean);

  }
}
