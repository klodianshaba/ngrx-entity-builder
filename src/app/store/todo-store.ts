import { signalStore, withComputed, withMethods } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import {
  id,
  ids,
  todo,
  TodoModel,
  todoPartial,
  todos,
} from '../models/todo.model';
import { entityComputed } from '../../builder/signals/entity-computed';
import { entityMethods } from '../../builder/signals/entity-methods';
import { inject } from '@angular/core';

export const todoStore = signalStore(
  withEntities<TodoModel>(),
  withComputed(store => entityComputed<TodoModel>(store)),
  withMethods(store => entityMethods<TodoModel>(store))
);

export class Component {
  todoStore = inject(todoStore);

  methods() {
    this.todoStore.set(todo); // set one entity
    this.todoStore.setMany(todos); // set many entities
    this.todoStore.setAll(todos); // set all entities
    this.todoStore.add(todo); // add one entity
    this.todoStore.addMany(todos); // add many entities
    this.todoStore.update(id, todoPartial); // update one entity
    this.todoStore.updateMany(ids, todoPartial); // update many entities
    this.todoStore.updateAll(todoPartial); // update all entities
    this.todoStore.updatePredicate(todo => todo.done, todoPartial); // update predicate entities
    this.todoStore.remove(id); // remove one entity
    this.todoStore.removeMany(ids); // remove many entities
    this.todoStore.removeAll(); // remove all entities
    this.todoStore.removePredicate(todo => todo.done); // remove predicate entities
  }

  selectors() {
    this.todoStore.entities(); // get all entities
    this.todoStore.count(); // get count
    this.todoStore.ids(); // get ids
    this.todoStore.select(id)(); // select by id
    this.todoStore.selectMany(ids)(); // select by ids
    this.todoStore.selectPredicate(todo => todo.done)(); // select by predicate
  }
}
