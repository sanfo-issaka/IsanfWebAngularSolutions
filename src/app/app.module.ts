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
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ResizeListenerComponent,
    ResizeComponent,
    ParentComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ParentComponent,
    ChildOneComponent,
    ChildTwoComponent
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
