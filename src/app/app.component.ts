import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookTableComponent } from './components/book-table/book-table.component';
import { HttpClient } from '@angular/common/http';
import { BookCardComponent } from "./components/book-card/book-card.component";
import { BookService } from './services/book.service';
import { BooksApiResponse } from './interfaces/book-interface';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'root',
  standalone: true,
  imports: [RouterOutlet, BookTableComponent, BookCardComponent, BookCardComponent, MatProgressSpinnerModule],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  public books: Signal<BooksApiResponse>;
  public shouldShowSpinner: WritableSignal<boolean> = signal(false);

  constructor(booksSrv: BookService) {
    this.shouldShowSpinner.set(true);
    booksSrv.getBooks().subscribe(booksResponse => {
      this.books = signal(booksResponse);
      this.shouldShowSpinner.set(false);
      console.clear();
      console.log(this.books().books);
    });
  }
}
