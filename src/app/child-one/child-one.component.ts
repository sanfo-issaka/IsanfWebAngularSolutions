//N 9
// src/app/child-one/child-one.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-one',
  template: `
    <h2>Child One Component</h2>
    <p>{{ message }}</p>
    <button (click)="sendMessage()">Notify Parent</button>
  `
})
export class ChildOneComponent {
  @Input() message: string = '';
  @Output() notify = new EventEmitter<string>();

  sendMessage(): void {
    this.notify.emit('Hello from Child One!');
  }
}
