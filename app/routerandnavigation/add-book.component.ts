import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from './services/book';
import { BookService } from './services/book.service';

@Component({
    selector: 'app-add-book',
    template: `<h2>Add Book</h2>
    <div>
     <div>
        <label>Name: </label>
        <input [(ngModel)]="book.name" />
     </div>	
     <div>
        <label>Price: </label>
        <input [(ngModel)]="book.price" />
     </div>	
     <div>
        <label>Short Description: </label>
        <input [(ngModel)]="book.description" />
     </div>	 
     <div>
        <button (click)="addBook()">Add</button>
     </div>
    </div> `,
    providers : [BookService]
})
export class AddBookComponent implements OnInit {
    books: Book[];
    book: Book = new Book();
    constructor(private router: Router,
        private bookService: BookService) { }
    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
    }
    ngOnInit(): void {
        this.getBooks();
    }
    addBook(): void {
        this.bookService.addBook(this.book);
        this.router.navigate(['/home']);
    }
}
