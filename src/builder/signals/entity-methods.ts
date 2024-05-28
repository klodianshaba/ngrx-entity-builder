import { patchState, StateSignal } from '@ngrx/signals';
import { EntityId, EntitySignals } from '@ngrx/signals/entities/src/models';
import {
  addEntities,
  addEntity,
  removeAllEntities,
  removeEntities,
  removeEntity,
  setAllEntities,
  setEntities,
  setEntity,
  updateAllEntities,
  updateEntities,
  updateEntity,
} from '@ngrx/signals/entities';
import { computed } from '@angular/core';

export const entityMethods = <T extends { id: EntityId }>(
  store: StateSignal<object> & EntitySignals<T>
) => {
  return {
    set(entity: T) {
      patchState(store, setEntity(entity));
    },
    setMany(entities: T[]) {
      patchState(store, setEntities(entities));
    },
    setAll(entities: T[]) {
      patchState(store, setAllEntities(entities));
    },
    add(entity: T) {
      patchState(store, addEntity(entity));
    },
    addMany(entities: T[]) {
      patchState(store, addEntities(entities));
    },
    update(id: EntityId, entity: Partial<T>) {
      patchState(store, updateEntity({ id, changes: entity }));
    },
    updateMany(ids: EntityId[], entity: Partial<T>) {
      patchState(store, updateEntities({ ids, changes: entity }));
    },
    updateAll(entity: Partial<T>) {
      patchState(store, updateAllEntities<T>(entity));
    },
    updatePredicate(predicate: (entity: T) => boolean, entity: Partial<T>) {
      patchState(
        store,
        updateEntities<T>({
          predicate: (entity: T) => predicate(entity),
          changes: entity,
        })
      );
    },
    remove(id: EntityId) {
      patchState(store, removeEntity(id));
    },
    removeMany(ids: EntityId[]) {
      patchState(store, removeEntities(ids));
    },
    removeAll() {
      patchState(store, removeAllEntities());
    },
    removePredicate(predicate: (entity: T) => boolean) {
      patchState(
        store,
        removeEntities((entity: T) => predicate(entity))
      );
    },
    //select methods
    select(id: EntityId) {
      return computed(() => store.entities().find(entity => entity.id === id));
    },
    selectMany(ids: EntityId[]) {
      return computed(() =>
        store.entities().filter(entity => ids.includes(entity.id))
      );
    },
    selectPredicate(predicate: (entity: T) => boolean) {
      return computed(() =>
        store.entities().filter(entity => predicate(entity))
      );
    },
  };
};
