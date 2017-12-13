import { Component, OnInit, style } from '@angular/core';

import { Book } from './services/book';
import { BookService } from './services/book.service';

@Component({
    selector: 'app-innerhome',
    template: `<h2>Book Details</h2>
    <ul [ngClass] = "'home'">
      <li *ngFor="let book of books" >
            Id: {{book.id}}, Name: {{book.name}} |
        <a [routerLink]="['/view-detail', book.id]">View Detail</a>
      </li>
    </ul>    <style>
    h2 {
        font-size: 1.5em;
        margin-top: 10;
      }
      .home {
        padding: 0;
      }
      .home  a{
        margin-top: 10px;
        display: inline-block;
        background-color: #eee;
        text-decoration: none;
      } </style> `,
      providers : [BookService]

})
export class HomeComponent implements OnInit {
    books: Book[];
    constructor(private bookService: BookService) { }
    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
    }
    ngOnInit(): void {
        this.getBooks();
    }
}
