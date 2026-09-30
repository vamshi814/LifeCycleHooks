import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-child-comp-a',
  templateUrl: './ChildComp-A.html',
  //styleUrls: ['./ChildComp-A.css']
})
export class ChildCompA {

    @Input() 
    ChildVariableA: string = "-" ;

    constructor() {
        console.log('childvariableA: ' + this.ChildVariableA);
        console.log('ChildCompA Constructor called');
    }

    
}