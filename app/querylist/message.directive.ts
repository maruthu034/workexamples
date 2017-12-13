import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[cpMsg]'
})
export class MessageDirectiveone {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
