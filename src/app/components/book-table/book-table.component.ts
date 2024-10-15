import { Component, input, OnInit, signal, WritableSignal } from '@angular/core';
import { Book, BooksApiResponse } from '../../interfaces/book-interface';

@Component({
  selector: 'book-table',
  standalone: true,
  imports: [],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.sass'
})
export class BookTableComponent implements OnInit{
  public books = input.required<BooksApiResponse>();
  public rowsFormatted: WritableSignal<Book[][]>;
  constructor() {}

  ngOnInit(): void {
    this.rowsFormatted = signal(this.books().books.map(book => Object.values(book)));
  }
}
