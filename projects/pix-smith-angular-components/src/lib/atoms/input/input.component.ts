import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'pix-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input({ required: true }) type!: string;
  @Input({ required: true }) value!: string | undefined;
  @Input() placeholder!: string;
  @Output() valueChange = new EventEmitter<string>();


  onValueChange(event: Event){
    this.value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.value);
  }
}
