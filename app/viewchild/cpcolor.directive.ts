import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[cpColor]'
})
export class CpColorDirective implements AfterViewInit {
    constructor(private elRef: ElementRef) {
    }
    ngAfterViewInit() {
        this.elRef.nativeElement.style.color = 'red';
    }
    change(changedColor: String) {
        this.elRef.nativeElement.style.color = changedColor;
    }
}
