import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
  })
  export class HighlightDirective {
  
    constructor(private element: ElementRef) {}
  
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('red');
    }
  
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }
  
    private highlight(color: string) {
        this.element.nativeElement.style.color = color;
    }
  
  }