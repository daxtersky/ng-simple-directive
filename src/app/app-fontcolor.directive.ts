import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appFontColor]'
})
export class AppFontColorDirective implements OnInit {
  @Input('appFontColor') fontColor: string;

  constructor(private elem: ElementRef) { }

  ngOnInit() {
    this.color(this.fontColor);
  }

  private color(color: string = 'violet') {
    this.elem.nativeElement.style.color = color;

  }

}