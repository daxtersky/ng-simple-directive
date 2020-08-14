import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AppHighlightDirective implements OnInit {
  @Input('appHighlight') defaultColor: string;
  hoverColor: string;

  constructor(private elem: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hoverColor = this.hoverChange(this.defaultColor) || this.hoverChange('magenta');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hoverColor = this.hoverChange(null);
  }

  private hoverChange = (color: string) => this.elem.nativeElement.style.color = color;


}