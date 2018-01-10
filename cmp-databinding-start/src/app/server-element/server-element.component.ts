import { Component,
         OnInit, 
         Input, 
         ViewEncapsulation, 
         OnChanges, 
         SimpleChanges,
         DoCheck,
         AfterContentInit,
         AfterViewChecked,
         AfterViewInit,
         OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterViewInit,
AfterViewChecked,
OnDestroy {

 @Input('srvElement') element:{ type: string, name: string, content: string};
 @Input() name  : string;
 constructor() {
    console.log('constructor called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes)
    
  }
  ngDoCheck() {
    //execute when detect any changes
    console.log('ngDoCheck called!');
    
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit called!")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called!")
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!")
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!")
  }
}
