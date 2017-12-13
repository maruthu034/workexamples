import { Directive, Input } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'book'
})
export class BookDirective {
    @Input() bookId: string;
    @Input() bookName: string;
}
