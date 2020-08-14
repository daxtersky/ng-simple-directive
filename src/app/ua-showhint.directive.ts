import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uaShowHint]'
})
export class UaShowHintDirective {
  @Input('uaShowHint') defaultColor: string;
  hoverColor: string;

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    // console.log('HOVER!!', this.elem.nativeElement);
    if (this.elem.nativeElement.scrollWidth > this.elem.nativeElement.clientWidth) {
      this.showTooltip();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip = () => this.renderer.setAttribute(this.elem.nativeElement, 'title', this.elem.nativeElement.innerHTML);
  private hideTooltip = () => this.renderer.removeAttribute(this.elem.nativeElement, 'title');
}

// style="cursor: default; width: 170px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"