import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parent1CompInznComponent } from './parent1-comp-inzn/parent1-comp-inzn.component';

@NgModule({
  declarations: [
    AppComponent,
    Parent1CompInznComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
