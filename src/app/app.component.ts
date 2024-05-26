import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `// ALT+96 Backtick character for template
    <hr>
    //N 1
    <button type="button" (click)="onClick()">Click</button>
    <h1 *ngIf="show">
      {{name}}
    </h1>
    <hr>
    //N 2
    <div *ngFor="let name of names">
      <div *ngIf="name.length > 6">
        {{name}}
      </div>
    </div>
    <hr>
    //N 3
    <div *ngFor="let user of users">
      <h2>{{user.name}}</h2>
      <p>{{user.email}}</p>
    </div>
    <hr>
    //N 4
    <button (click)="changeData()">Change Data</button>
    <button (click)="toggleChild()">Toggle Child Component</button>
    <app-child *ngIf="showChild" [data]="parentData"></app-child>
    <hr>
    //N 5
    <app-resize-listener></app-resize-listener>
    <hr>
    //N 7 <br>
    {{ cost | currency }}

    <hr>
    //N 9
    <app-parent></app-parent>

    `
})
export class AppComponent {
  name = 'John Doe';
  show = true;
  names = ['Theresa', 'Morris', 'Duane', 'Taz'];
  parentData = 'Initial data';
  showChild = true;
  cost = '200.13';

  //N 3
  users: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  //N 1
  onClick() {
    this.show = !this.show;
  }

  changeData() {
    this.parentData = 'Updated data at ' + new Date().toLocaleTimeString();
  }

  toggleChild() {
    this.showChild = !this.showChild;
  }
}