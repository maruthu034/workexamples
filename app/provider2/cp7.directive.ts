import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[cp7]'
})
export class CP7Directive {
    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }
    @HostListener('mouseover')
    onMouseOver() {
        this.renderer.addClass(this.elRef.nativeElement, 'praveen');
        // Add more class
        // this.renderer.addClass(this.elRef.nativeElement, 'efg');
    }
    @HostListener('mouseleave')
    onMouseLeave() {
        this.renderer.removeClass(this.elRef.nativeElement, 'praveen');
        // Remove more class
        // this.renderer.removeClass(this.elRef.nativeElement, 'efg');
    }
}
