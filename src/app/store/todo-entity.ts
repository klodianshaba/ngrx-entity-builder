import { createEntity } from '../../builder/create-entity';
import { State } from './index';
import { AdditionalModel } from '../models/additional.model';
import { selectState } from './selectors';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModel, todo, todos, id, ids, todoPartial, additionalPartial } from '../models/todo.model';

export const todoFeatureKey = 'todos';
export const todoEntity = createEntity<State, TodoModel, AdditionalModel>(selectState, todoFeatureKey);

export class Component {
  store = inject(Store<State>);

  actions() {
    this.store.dispatch(todoEntity.actions.setAll(todos)); // set all entities
    this.store.dispatch(todoEntity.actions.setMany(todos)); // set many entities
    this.store.dispatch(todoEntity.actions.setOne(todo)); // set one entity
    this.store.dispatch(todoEntity.actions.addOne(todo)); // add one entity
    this.store.dispatch(todoEntity.actions.addMany(todos)); // add many entities
    this.store.dispatch(todoEntity.actions.unshift(todos)); // unshift entities
    this.store.dispatch(todoEntity.actions.updateOne({ id, changes: todoPartial })); // update one entity
    this.store.dispatch(
      todoEntity.actions.updateMany([
        { id, changes: todoPartial },
        { id, changes: todoPartial },
      ])
    ); // update many entities
    this.store.dispatch(todoEntity.actions.updateAdditional(additionalPartial)); // update additional props
    this.store.dispatch(todoEntity.actions.upsertOne(todo)); // upsert one entity
    this.store.dispatch(todoEntity.actions.upsertMany(todos)); // upsert many entities
    this.store.dispatch(todoEntity.actions.mapOne({ id, map: todo => todo })); // map one entity
    this.store.dispatch(todoEntity.actions.mapMany(todo => todo)); // map many entities
    this.store.dispatch(todoEntity.actions.removeOne(id)); // remove one entity
    this.store.dispatch(todoEntity.actions.removeMany(ids)); // remove many entities
    this.store.dispatch(todoEntity.actions.removePredicate(todo => todo.done)); // remove predicate entities
    this.store.dispatch(todoEntity.actions.clear()); // clear entities
  }

  selectors() {
    this.store.selectSignal(todoEntity.selectors.entities); // get all entities
    this.store.selectSignal(todoEntity.selectors.all); // get all entities
    this.store.selectSignal(todoEntity.selectors.count); // get count
    this.store.selectSignal(todoEntity.selectors.state); // get state
    this.store.selectSignal(todoEntity.selectors.ids); // get ids
    this.store.selectSignal(todoEntity.selectors.select(id)); // select by id
    this.store.selectSignal(todoEntity.selectors.selectMany(ids)); // select by ids
    this.store.selectSignal(todoEntity.selectors.selectPredicate(todo => todo.done)); // select by predicate
  }
}
