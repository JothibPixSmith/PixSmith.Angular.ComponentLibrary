import { Component } from '@angular/core';

import { LabelComponent,InputComponent, ButtonComponent, DropdownComponent, DropdownItem } from 'pix-smith-angular-components';

@Component({
  selector: 'app-root',
  imports: [LabelComponent, InputComponent, ButtonComponent, DropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  textInputValue!: string;
  title = 'pix-smith-components';
  items!:DropdownItem[];

  constructor() {
    this.items = [{
      text:"text 1",
      value: "val1",
    },
    {
      text:"text 2",
      value: "val2",
    },
    {
      text:"text 3",
      value: "val3",
      action: (item) => alert(item.text)
    },
  ]
  }

  ngOnInit(){
    this.textInputValue = "";
  }

  onClick(){
    alert("click!")
  }
}
