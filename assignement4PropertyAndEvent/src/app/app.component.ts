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
  numberSumArray=[{}];
  numberType:string;
  onStartGame(numberSum: number){
    this.numberSum=numberSum;
   var numberType= numberSum %2 ? "even" : "odd";
    this.numberSumArray.push({value: numberSum, type: numberType});
  }



}
