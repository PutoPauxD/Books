export interface BooksApiResponse {
  actualBook: string;
  headers: string[];
  books: Book[];
}

export interface Book {
  title: string;
  series: string;
  author: string;
  seriesNumber: number;
  totalPages: number;
  pagesRead: number;
  publisher: string;
  signed: boolean;
  specialEdition: boolean;
  read: boolean;
  coverType: string;
  progress: number;
  pagesRemaining: number;
  price: number;
  purchasedAt: string;
  purchasedOn: Date;
  startedOn: Date;
  finishedOn: Date;
  image: string;
}
