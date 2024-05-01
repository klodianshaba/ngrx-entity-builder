import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  {
    path: 'books',
    loadComponent: () =>
      import('./pages/books/books.component').then(m => m.BooksComponent),
  },
  {
    path: 'book/:id',
    loadComponent: () =>
      import('./pages/book/book.component').then(m => m.BookComponent),
  },
  {
    path: 'authors',
    loadComponent: () =>
      import('./pages/authors/authors.component').then(m => m.AuthorsComponent),
  },
];
