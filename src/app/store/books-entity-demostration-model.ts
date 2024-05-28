import { BookModel } from '../models/book.model';

export const id: number = 1;
export const ids: number[] = [1, 2];
export const books: BookModel[] = [
  {
    id: 1,
    title: 'kl',
    authorId: 2,
    year: 2024,
    pages: 52,
    rating: 3,
    color: '#FFFFFF',
  },
];

export const book: BookModel = {
  id: 1,
  title: 'kl',
  authorId: 2,
  year: 2024,
  pages: 52,
  rating: 3,
  color: '#FFFFFF',
};

export const bookPartial: Partial<BookModel> = {
  title: 'kl',
  authorId: 2,
  year: 2024,
};
