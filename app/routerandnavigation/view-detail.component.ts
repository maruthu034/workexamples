import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Book } from './services/book';
import { BookService } from './services/book.service';

@Component({
    selector: 'app-view-detail',
    template:
    `<h2>View Detail</h2>
    <ul [ngClass] = "'view-detail'">
      <li>
        Id: {{book.id}}
      </li>
      <li>
        Name: {{book.name}}
      </li>
      <li>
        Price: {{book.price}}
      </li>
      <li>
        Description: {{book.description}}
      </li>
    </ul>
    <div>
     <button (click)="goBack()">Go Back</button>
     <button (click)="updateBook(book.id)">Update</button>
    </div>
    <div>
    </div> `,
    providers : [BookService]
})
export class ViewDetailComponent implements OnInit {
    book: Book = new Book();
    link = 'https://www.amazon.in/';
    constructor(private route: ActivatedRoute,
        private router: Router,
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
    updateBook(id: number): void {
        this.router.navigate(['/update-book', id], { relativeTo: this.route });
    }
}
