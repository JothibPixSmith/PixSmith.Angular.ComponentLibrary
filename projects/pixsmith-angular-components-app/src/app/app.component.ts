import { Component } from '@angular/core';

import { LabelComponent, ButtonComponent, DropdownComponent, DropdownItem } from 'pix-smith-angular-components';

@Component({
  selector: 'app-root',
  imports: [LabelComponent, ButtonComponent, DropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pixsmith-angular-components-app';
  dropdownItems: DropdownItem[];
  constructor() {
    this.dropdownItems = [{
      text: "Test 1",
      value: "Value 1"
    },
    {
      text: "Test 2",
      value: "Value 2"
    },
    {
      text: "Test 2",
      value: "Value 2"
    },
    {
      text: "Test 3",
      value: "Value 3"
    }]
  }
}
