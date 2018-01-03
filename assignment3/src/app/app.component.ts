import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showButton:boolean = true;
  logValue:number=0;
  logArray=[];

  onToggle(){
      this.showButton ?  this.showButton=false : this.showButton=true;
      this.logValue ++;
      this.logArray.push(this.logValue);
    }


}
