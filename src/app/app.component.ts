import { HttpClient } from '@angular/common/http';
import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterOutlet } from '@angular/router';
import { BookCardComponent } from "./components/book-card/book-card.component";
import { BookTableComponent } from './components/book-table/book-table.component';
import { BooksApiResponse } from './interfaces/book-interface';
import { BookService } from './services/book.service';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'root',
  standalone: true,
  imports: [RouterOutlet, BookTableComponent, BookCardComponent, BookCardComponent, MatProgressSpinnerModule, NavbarComponent],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {

  public books: Signal<BooksApiResponse>;
  public shouldShowSpinner: WritableSignal<boolean> = signal(true);

  constructor(
    booksService: BookService
  ) {
    booksService.getBooks().subscribe(booksResponse => {
      this.books = signal(booksResponse);
      this.shouldShowSpinner.set(false);
    });
  }

}
