import { Component, ContentChild } from '@angular/core';
import { BookDirectiveChild } from './book.directive';

@Component({
    selector: 'app-writer-child',
    template: `
        Name: {{writerName}}
	    <br/>Latest Book: {{book?.bookId}} - {{book?.bookName}}
  `
})
// tslint:disable-next-line:component-class-suffix
export class WriterComponentchild {
    @ContentChild(BookDirectiveChild) book: BookDirectiveChild;
    writerName = 'Mahesh';
}
