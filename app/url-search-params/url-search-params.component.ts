import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'app-url-search-params',
  templateUrl: './url-search-params.component.html',
  styleUrls: ['./url-search-params.component.css'],
  providers: [BookService]
})
export class UrlSearchParamsComponent implements OnInit {
  allBooks: Book[];

  book: Book;
  filteredListOfBooks: Book[];
  errorMessage: String;
  dataAvailableById = true;
  dataAvailableAfterFilter = true;
  categories = [
    { name: 'Angular' },
    { name: 'Hibernate' },
    { name: 'Java' }
  ];
  writers = [
    { name: 'Krishna' },
    { name: 'Vishnu' }
  ];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks() {
    this.bookService.getAllBooks()
      .subscribe(
      data => this.allBooks = data,
      error => this.errorMessage = <any>error);
    console.log('this.allBooks:', this.allBooks);
  }
  getBookById(bookId: string) {
    this.dataAvailableById = true;
    this.book = null;
    this.bookService.getBookById(bookId)
      .subscribe(
      data => {
        if (data.length > 0) {
          this.book = data[0];
        } else {
          this.dataAvailableById = false;
        }
      },
      error => this.errorMessage = <any>error
      );
  }
  getBooksAfterFilter(category: string, writer: string) {
    this.dataAvailableAfterFilter = true;
    this.filteredListOfBooks = null;
    this.bookService.getBooksAfterFilter(category, writer)
      .subscribe(
      data => {
        if (data.length > 0) {
          this.filteredListOfBooks = data;
          console.log('this.filteredListOfBooks', this.filteredListOfBooks);
        } else {
          this.dataAvailableAfterFilter = false;
        }
      },
      error => this.errorMessage = <any>error
      );
  }
  bookById(bookByIdForm: NgForm) {
    const bookId = bookByIdForm.controls['bookId'].value;
    this.getBookById(bookId);
  }
  filterBooks(bookByIdForm: NgForm) {
    const catg = bookByIdForm.controls['category'].value;
    const wtr = bookByIdForm.controls['writer'].value;
    this.getBooksAfterFilter(catg, wtr);
  }
}
