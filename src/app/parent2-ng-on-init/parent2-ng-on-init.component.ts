import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-parent2-ng-on-init',
  templateUrl: './parent2-ng-on-init.component.html',
  styleUrls: ['./parent2-ng-on-init.component.css']
})
export class Parent2NgOnInitComponent implements OnChanges{


  cosntructor() {
    console.log('constructor parent2 called...');
  }
  ngOnChanges() {
    console.log('ngOnChanges parent2 called');
  }
}
