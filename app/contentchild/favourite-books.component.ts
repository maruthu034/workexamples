import { Component, ContentChildren, QueryList } from '@angular/core';
import { BookDirectiveChild } from './book.directive';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'favourite-books-child',
    template: `
        <b>Top Favourite Books</b>
	<ng-template ngFor let-book [ngForOf]= "topBooks">
	   <br/>{{book.bookId}} - {{book.bookName}}
	</ng-template>
	<br/><b>All Favorite Books</b>
	<ng-template ngFor let-book [ngForOf]= "allBooks">
	   <br/>{{book.bookId}} - {{book.bookName}}
	</ng-template>
  `
})
// tslint:disable-next-line:component-class-suffix
export class FavouriteBooksComponentchild {
    @ContentChildren(BookDirectiveChild) topBooks: QueryList<BookDirectiveChild>;
    @ContentChildren(BookDirectiveChild, { descendants: true }) allBooks: QueryList<BookDirectiveChild>;
}
