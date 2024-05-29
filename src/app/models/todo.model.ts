export interface TodoModel {
  id: number;
  title: string;
  done: boolean;
  active: boolean;
}

export const id: number = 1;
export const ids: number[] = [1, 2];
export const todos: TodoModel[] = [
  {
    id: 1,
    title: 'kl',
    done: true,
    active: true,
  },
];

export const todo: TodoModel = {
  id: 1,
  title: 'kl',
  done: true,
  active: true,
};

export const todoPartial: Partial<TodoModel> = {
  title: 'kl',
  done: true,
};

export const additionalPartial: Partial<TodoModel> = {
  title: 'kl',
  done: true,
};
