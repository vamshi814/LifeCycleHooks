import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LifeCycleHooks';
  constructor() {
    console.log('AppComponent Constructor called');
  }

  // ngOnInit()-------------------------------------
  // inputVal:string = '';
  // suppose inputVal is not a string if it is string array
    inputVal: string[] = ['helo','hi','welcome'];
  onSubmit(types: HTMLInputElement) {
    this.inputVal.push(types.value);
    
  }


  //

}
