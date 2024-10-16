import { Component, input } from '@angular/core';
import { Book } from '../../interfaces/book-interface';

@Component({
  selector: 'book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.sass'
})
export class BookCardComponent {

  public book = input.required<Book>();

}
