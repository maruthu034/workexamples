import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Book } from './services/book';
import { BookService } from './services/book.service';

@Component({
    selector: 'app-update-book',
    template: `
    <h2>Update Book</h2>
    <div>
     <div>
        <label>Id: </label> {{book.id}}
     </div>
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
        <button (click)="goBack()">Go Back</button>
     </div>
    </div>`,
    providers : [BookService]
})
export class UpdateBookComponent implements OnInit {
    book: Book = new Book();
    constructor(private route: ActivatedRoute,
        private bookService: BookService,
        private location: Location) { }
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.bookService.getBook(+params['id']))
            .subscribe(book => this.book = book);
    }
    goBack(): void {
        this.location.back();
    }
}
