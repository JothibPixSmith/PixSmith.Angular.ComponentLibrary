import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pix-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() type!: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
  @Output() click: EventEmitter<any> = new EventEmitter();
}
