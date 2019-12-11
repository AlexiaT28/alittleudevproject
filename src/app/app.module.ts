import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BonbonComponent } from './bonbon/bonbon.component';
import { BonbonniereComponentComponent } from './bonbonniere-component/bonbonniere-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BonbonComponent,
    BonbonniereComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
