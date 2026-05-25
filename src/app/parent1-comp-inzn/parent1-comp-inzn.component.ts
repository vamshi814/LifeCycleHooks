import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent1-comp-inzn',
  templateUrl: './parent1-comp-inzn.component.html',
  styleUrls: ['./parent1-comp-inzn.component.css']
})
export class Parent1CompInznComponent {

  name:string = 'Parent1CompInznComponent';
  @Input() parentData:string = 'first Name';
  constructor(){
    console.log('Parent1CompInznComponent Constructor called');
    console.log(this.name);
    console.log(this.parentData);
  }
}
