import { Directive, Input } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'book-child'
})
// tslint:disable-next-line:directive-class-suffix
export class BookDirectiveChild {
    @Input() bookId: string;
    @Input() bookName: string;
}
