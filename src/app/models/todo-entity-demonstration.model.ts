import { TodoModel } from './book.model';

export const id: number = 1;
export const ids: number[] = [1, 2];
export const todos: TodoModel[] = [
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

export const todo: TodoModel = {
  id: 1,
  title: 'kl',
  authorId: 2,
  year: 2024,
  pages: 52,
  rating: 3,
  color: '#FFFFFF',
};

export const todoPartial: Partial<TodoModel> = {
  title: 'kl',
  authorId: 2,
  year: 2024,
};

export const additionalPartial: Partial<TodoModel> = {
  title: 'kl',
  authorId: 2,
  year: 2024,
};
