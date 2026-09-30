import { Component } from '@angular/core';
import { ChildCompA } from '../ChildComp-A/ChildComp-A';
import { UserService } from '../Services/UserService';

@Component({
  selector: 'app-parent-comp-a',
  templateUrl: './ParentComp-A.html',
  //styleUrls: ['./ParentComp-A.css']
})
export class ParentCompA {
    ParentVariableA: string = "Shivaji";
    ChildVariableFromParentA: string = "Sambhaji";

    constructor(private userService: UserService) {
        console.log('ParentCompA Constructor called');
    }

    getUserNameFromService(): void {
        console.log(this.userService.getUserName());
    }
}
