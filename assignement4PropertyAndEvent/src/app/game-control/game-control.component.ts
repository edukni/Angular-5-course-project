import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Input('viewName') name: string; 
  @Input('viewNameArray') viewNameArray: { name:string } ;
  
  constructor() { }
  

  ngOnInit() {
    console.log(this.viewNameArray);
  }

}
