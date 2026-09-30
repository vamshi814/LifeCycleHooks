import { Component } from '@angular/core';

@Component({
  selector: 'app-parent3-ng-do-check',
  templateUrl: './parent3-ng-do-check.component.html',
  styleUrls: ['./parent3-ng-do-check.component.css']
})
export class Parent3NgDoCheckComponent {



  constructor() {
    console.log('Parent3 Constructor called');
  }

  ngOnChanges(){
    console.log('ngOnChanges Parent3 hook called - ');
  }
}
