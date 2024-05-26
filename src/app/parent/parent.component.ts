//N 9
// src/app/parent/parent.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h1>Parent Component</h1>
    <app-child-one [message]="parentMessage" (notify)="onNotify($event)"></app-child-one>
    <app-child-two [names]="names"></app-child-two>
  `
})
export class ParentComponent {
  parentMessage = 'Hello from Parent!';
  names = ['Theresa', 'Morris', 'Duane', 'Taz'];

  onNotify(message: string): void {
    alert(`Received message from child: ${message}`);
  }
}
