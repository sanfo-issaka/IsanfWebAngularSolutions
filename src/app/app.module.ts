import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//N 3
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { ChildComponent } from './child/child.component';
//N 5
import { ResizeListenerComponent } from './resize-listener/resize-listener.component';
import { ResizeComponent } from './resize/resize.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ResizeListenerComponent,
    ResizeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
              //N 3
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
