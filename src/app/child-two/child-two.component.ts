//N 9
// src/app/child-two/child-two.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-two',
  template: `
    <h2>Child Two Component</h2>
    <ul>
      <li *ngFor="let name of names"> <p *ngIf="name.length > 6">{{ name }}</p></li>
    </ul>
  `
})
export class ChildTwoComponent {
  @Input() names: string[] = [];
}
