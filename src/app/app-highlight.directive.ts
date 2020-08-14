import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AppHighlightDirective {
  constructor(elem: ElementRef) {
    console.log('app directive');
    elem.nativeElement.style.color = 'red';
  }
}