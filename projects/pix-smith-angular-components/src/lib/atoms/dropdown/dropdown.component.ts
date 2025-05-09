import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownItem } from './dropdownTypes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pix-dropdown',
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input({required: true})items!: DropdownItem[];
  @Input({required: true})placeholder!:string;
  @Output() onSelectedItemClicked = new EventEmitter<DropdownItem>();

  onSelectedItemClickedInternal(item: DropdownItem){
    this.onSelectedItemClicked.emit(item);

    if(item?.action){
      item?.action(item);
    }

  }
}
