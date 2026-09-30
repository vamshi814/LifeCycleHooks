import { Component } from '@angular/core';
import { ChildCompA } from '../ChildComp-A/ChildComp-A';

@Component({
  selector: 'app-parent-comp-a',
  templateUrl: './ParentComp-A.html',
  //styleUrls: ['./ParentComp-A.css']
})
export class ParentCompA {
    ParentVariableA: string = "Shivaji";
    ChildVariableFromParentA: string = "Sambhaji";

    constructor() {
        console.log('ParentCompA Constructor called');
    }
}
