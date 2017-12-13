import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { Book } from './services/book';
import { BookService } from './services/book.service';
import { PREFERRED_BOOKS, preferredBooksFactory } from './preferred-books';

const JAVA_BOOK = new Book('Thinking in Java', 'Hibernate');

@Component({
    selector: 'app-book-factory',
    providers: [
        BookService,
        { provide: Book, useValue: JAVA_BOOK },
        { provide: PREFERRED_BOOKS, useFactory: preferredBooksFactory(3), deps: [Book, BookService] }
    ],
    template: `
	  <h3>Preferred Books</h3>
	  {{preferredBooks}}
	`
})
export class BookFactoryComponent implements OnInit {
    constructor( @Inject(PREFERRED_BOOKS) private preferredBooks: string) { }

    ngOnInit() {
    }
}
