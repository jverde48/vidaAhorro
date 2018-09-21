import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { HeaderComponent } from './components/layout/header.component';
import { MenuComponent } from './components/layout/menu.component';
import { BodyComponent } from './components/layout/body.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    MenuComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
