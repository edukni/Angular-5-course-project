import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Input('viewName') name: string; 
  @Input('viewNameArray') viewNameArray: { name:string } ;
  @Output() startGame = new EventEmitter<number>();
  numberSum : number = 0;
  constructor() { }
  interval;
      

  onStartGame(){
    this.interval = setInterval(()=> {
      this.numberSum++;   
      this.startGame.emit(this.numberSum);
      
    },1000); 

  }

  onStopGame(){
    clearInterval(this.interval);
  }


  ngOnInit() {
  }

}
