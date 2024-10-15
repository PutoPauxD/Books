import { Injectable } from '@angular/core';
import { BooksApiResponse } from '../interfaces/book-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private BOOKS_API: string = "https://script.google.com/macros/s/AKfycbwQiq2Ox0RBwfoSp4iYr8Egc31lCk9x4NdCoHbQF5IkUhspep3e9BqNybZsb65lMXfm/exec";
  constructor(private http: HttpClient) {}

  getBooks(): Observable<BooksApiResponse> {
    return this.http.get<BooksApiResponse>(this.BOOKS_API);
  };
}
