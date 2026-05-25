import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parent1CompInznComponent } from './parent1-comp-inzn/parent1-comp-inzn.component';
import { DemoComponent } from './demo/demo.component';
import { NgOnchanges1Component } from './demo/ng-onchanges1/ng-onchanges1.component';
import { Parent2NgOnInitComponent } from './parent2-ng-on-init/parent2-ng-on-init.component';

@NgModule({
  declarations: [
    AppComponent,
    Parent1CompInznComponent,
    DemoComponent,
    NgOnchanges1Component,
    Parent2NgOnInitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
