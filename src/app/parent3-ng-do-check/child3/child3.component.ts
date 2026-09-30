import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnChanges, OnInit, DoCheck {

  ngOnChanges(){
    console.log('ngOnChanges hook child3 called - ' , );
  }
  ngOnInit() {
    console.log('ngOnInit hook child3 called');
  }
  ngDoCheck() {
    console.log('ngDoCheck hook child3 called');
  } 
}
