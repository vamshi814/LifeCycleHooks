import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  inputVal: string ='';
  constructor() {
    console.log('constructor demo called');
  }

  onSubmit(inputEl: HTMLInputElement) {
    console.log('Submit button clicked');
    this.inputVal = inputEl.value;
  }
}
