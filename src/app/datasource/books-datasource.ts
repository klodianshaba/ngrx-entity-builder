import { BookModel } from '../models/book.model';

export const booksDatasource: BookModel[] = [
  { id: 1, title: 'Book 1', authorId: 1, year: 2000, pages: 20, rating: 2.7 },
  { id: 2, title: 'Book 2', authorId: 2, year: 2005, pages: 300, rating: 5 },
  { id: 3, title: 'Book 3', authorId: 3, year: 1999, pages: 650, rating: 1 },
  { id: 4, title: 'Book 4', authorId: 1, year: 2003, pages: 32, rating: 5 },
  { id: 5, title: 'Book 5', authorId: 2, year: 2024, pages: 450, rating: 2 },
  { id: 6, title: 'Book 6', authorId: 3, year: 2022, pages: 102, rating: 2.5 },
  { id: 7, title: 'Book 7', authorId: 1, year: 2021, pages: 236, rating: 3.5 },
  { id: 8, title: 'Book 8', authorId: 2, year: 2014, pages: 96, rating: 3 },
  { id: 9, title: 'Book 9', authorId: 3, year: 2008, pages: 12, rating: 5 },
  {
    id: 10,
    title: 'Book 10',
    authorId: 3,
    year: 2020,
    pages: 255,
    rating: 4.5,
  },
];