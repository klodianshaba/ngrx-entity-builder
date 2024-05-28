import { BookModel } from '../models/book.model';

export const booksDatasource: BookModel[] = [
  {
    id: 1,
    title: 'Don Quixote',
    authorId: 1,
    year: 2000,
    pages: 20,
    rating: 2.7,
    color: 'pink',
  },
  {
    id: 2,
    title: 'The Scarlet Letter',
    authorId: 2,
    year: 2005,
    pages: 300,
    rating: 5,
    color: 'gray',
  },
  {
    id: 3,
    title: "Gulliver's Travels",
    authorId: 3,
    year: 1999,
    pages: 650,
    rating: 1,
    color: 'yellow',
  },
  {
    id: 4,
    title: 'A Christmas Carol',
    authorId: 1,
    year: 2003,
    pages: 32,
    rating: 5,
    color: 'green',
  },
];
