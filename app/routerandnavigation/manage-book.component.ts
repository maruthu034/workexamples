import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Book } from './services/book';
import { BookService } from './services/book.service';

@Component({
    selector: 'app-manage-book',
    template : `
    <h2>Manage Book</h2>
    <ul [ngClass] = "'manage-book'">
      <li *ngFor="let book of books" >
              Id: {{book.id}}, Name = {{book.name}}
          <button (click)="updateBook(book.id)">Update</button>
          <button (click)="deleteBook(book.id)">Remove</button>
      </li>
    </ul> `,
    providers : [BookService]
})
export class ManageBookComponent implements OnInit {
    books: Book[];
    book: Book = new Book();
    constructor(private router: Router,
        private route: ActivatedRoute,
        private bookService: BookService) { }
    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
    }
    ngOnInit(): void {
        this.getBooks();
    }
    updateBook(id: number): void {
        this.router.navigate(['/update-book', id], { relativeTo: this.route });
    }
    deleteBook(id: number): void {
        this.bookService.deleteBook(id);
    }
}
