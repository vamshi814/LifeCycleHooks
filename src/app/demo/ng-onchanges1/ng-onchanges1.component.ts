import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-onchanges1',
  templateUrl: './ng-onchanges1.component.html',
  styleUrls: ['./ng-onchanges1.component.css']
})
export class NgOnchanges1Component {

  title: string = 'ngOnChanges demo';
  @Input() message: string='';
  constructor() {
    console.log('constructor ng on changes called');
    
  }
  ngOnChanges() {
    console.log('ngOnChanges called');
    console.log('title:', this.title);
    console.log('message:', this.message);
  }

}
