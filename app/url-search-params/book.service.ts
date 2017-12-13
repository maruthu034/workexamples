import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

import { Book } from './book';

@Injectable()
export class BookService {
    // public url = 'book.json';
    url = 'api/books';
    constructor(private http: Http) { }
    getAllBooks(): Observable<Book[]> {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getBookById(bookId: string): Observable<Book[]> {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        const myParams = new URLSearchParams();
        myParams.append('id', bookId);
        const options = new RequestOptions({ headers: myHeaders, params: myParams });
        return this.http.get(this.url, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getBooksAfterFilter(catg: string, wtr: string): Observable<Book[]> {
        const myHeaders = new Headers();
        myHeaders.set('Content-Type', 'application/json');
        const myParams = new URLSearchParams();
        myParams.set('category', catg);
        myParams.set('writer', wtr);
        const options = new RequestOptions({ headers: myHeaders, params: myParams });
        return this.http.get(this.url, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        const body = res.json().data;
        return body;
    }
    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}
