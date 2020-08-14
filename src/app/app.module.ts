import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AppFontColorDirective } from './app-fontcolor.directive';
import { AppHighlightDirective } from './app-highlight.directive';
import { UaShowHintDirective } from './ua-showhint.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AppFontColorDirective, AppHighlightDirective, UaShowHintDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
