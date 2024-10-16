import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BooksApiResponse } from '../interfaces/book-interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  getBooks(): Observable<BooksApiResponse> {
    return this.http.get<BooksApiResponse>(environment.books_api);
  };

}
