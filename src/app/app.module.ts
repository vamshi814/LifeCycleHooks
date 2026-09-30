import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentCompA } from './ParentComp-A/ParentComp-A';
import { ChildCompA } from './ChildComp-A/ChildComp-A';

@NgModule({
  declarations: [
    AppComponent,
    ParentCompA,
    ChildCompA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
