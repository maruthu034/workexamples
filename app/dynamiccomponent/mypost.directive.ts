import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[cpMyPost]',
})
export class MyPostDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
