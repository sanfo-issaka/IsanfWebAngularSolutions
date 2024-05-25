//N 4
// src/app/child/child.component.ts
import { Component, Input, OnChanges, OnDestroy, AfterViewInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      Child component: {{ data }}
    </p>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnDestroy, AfterViewInit {
  @Input() data: string = "";

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges - data:', changes.data.currentValue);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit - Child component view initialized');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - Child component destroyed');
  }
}
