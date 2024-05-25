import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-resize-listener',
  templateUrl: './resize-listener.component.html',
  styleUrls: ['./resize-listener.component.css']
})
export class ResizeListenerComponent implements OnInit {

  windowWidth: number = window.innerWidth;
  windowHeight: number = window.innerHeight;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    console.log(`Window resized to ${this.windowWidth} x ${this.windowHeight}`);
  }

  ngOnInit(): void {
  }

}
