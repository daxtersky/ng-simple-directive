import { Component, VERSION, ViewChild } from '@angular/core';
// import { AppHighlightDirective } from './app-highlight.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // @ViewChild(AppHighlightDirective) appHighlight: AppHighlightDirective;
  
  name = 'Angular ' + VERSION.major;
}
