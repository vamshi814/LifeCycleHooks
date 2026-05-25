import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-parent2-ng-on-init',
  templateUrl: './parent2-ng-on-init.component.html',
  styleUrls: ['./parent2-ng-on-init.component.css']
})
export class Parent2NgOnInitComponent implements OnChanges{

  @Input() msg: string[] = [];

  constructor() {
    console.log('constructor parent2 called...');
    console.log('Msg : ' + this.msg);
  }
  ngOnChanges() {
    console.log('ngOnChanges hook parent2 called');
    console.log('Msg in parent2 ngOnChanges: ' + this.msg);
  }
  ngOnInit(){
    console.log('ngOnInit hook parent2 called');
    console.log('Msg in parent2 ngOnInit: ' + this.msg);
  }
}
