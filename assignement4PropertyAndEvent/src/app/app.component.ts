import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  viewName:string="Game Control";
  viewNameArray = [{ name: "Game Control"}];
  numberSum : number=0;
  numberSumArray=[1];

  onStartGame(numberSum: number){
    console.log(numberSum);
    this.numberSum=numberSum;
    this.numberSumArray.push(numberSum);
  }



}
