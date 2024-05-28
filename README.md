# Ngrx Entity Builder

Ngrx utilities taking rid of complexity and boilerplate code

# Ngrx Signals

### EntityMethods

Provides methods of an entity

### EntityComputed

Provides computed signals of an entity

## Signal Store 

```typescript
export const todoStore = signalStore(
  withEntities<TodoModel>(),
  withMethods(store => entityMethods<TodoModel>(store)),
  withComputed(store => entityComputed<TodoModel>(store))
);
```

That's all about it! we are done 🚀

## Using Todo Store

```typescript
todoStore = inject(todoStore);

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
this.todoStore.removePredicate(todo => !todo.done); // remove predicate entities

this.todoStore.entities(); // get all entities
this.todoStore.count(); // get entities count
this.todoStore.ids(); // get entity ids
this.todoStore.select(id)(); // select by id
this.todoStore.selectMany(ids)(); // select by ids
this.todoStore.selectPredicate(todo => todo.done)(); // select by predicate

```

# Ngrx Store

## CreateEntity

Create entity generic function returns an object containing\
✔ feature key\
✔ adapter\
✔ reducer\
✔ selectors\
✔ actions

```typescript
export const entityFeatureKey = 'entity';
export const entity = createEntity<State, EntityModel, AdditionalEntityModel>(
    selectState,
    entityFeatureKey
);
```

## State

```typescript
export interface State {
    [entityFeatureKey]: EntityState<EntityModel>;
}

export const reducers: ActionReducerMap<State> = {
    [entityFeatureKey]: entity.reducer,
};
```

## Provide Store

```typescript
bootstrapApplication(AppComponent, {
    providers: [
        provideStore(reducers, { metaReducers }),
    ],
});
```

That's it! we are all done 🚀

## Using Entity Selectors 

```typescript
this.store.select(
    entity.selectors.state
);
this.store.select(
    entity.selectors.entities
);
this.store.select(
    entity.selectors.all
);
this.store.select(
    entity.selectors.select
);
this.store.select(
    entity.selectors.count
);
this.store.select(
    entity.selectors.select(id)
);
this.store.select(
    entity.selectors.selectMany(ids)
);
this.store.select(
    entity.selectors.selectPredicate(entity => entity.isActive)
);
```

## Using Entity Actions

```typescript
this.store.dispatch(
    entity.actions.setAll(entities)
);
this.store.dispatch(
    entity.actions.setMany(entities)
);
this.store.dispatch(
    entity.actions.setOne(entity)
);
this.store.dispatch(
    entity.actions.addOne(entity)
);
this.store.dispatch(
    entity.actions.addMany(entities)
);
this.store.dispatch(
    entity.actions.unshift(entities)
);
this.store.dispatch(
    entity.actions.updateOne(
        { id, changes: entityPartial }
    )
);
this.store.dispatch(
    entity.actions.updateMany(
        [
            { id, changes: entityPartial },
            { id, changes: entityPartial }
        ]
    )
);
this.store.dispatch(
    entity.actions.updateAdditional(entityAdditional)
);
this.store.dispatch(
    entity.actions.upsertOne(entity)
);
this.store.dispatch(
    entity.actions.upsertMany(entities)
);
this.store.dispatch(
    entity.actions.mapOne(
        {
          id,
          map: entity => {
              return { ...entity, title }
          }
        }
    )
);
this.store.dispatch(
    entity.actions.mapMany(
        entity => {
            return { ...entity, title };
        }
    )
);
this.store.dispatch(
    entity.actions.removeOne(id)
);
this.store.dispatch(
    entity.actions.removeMany(ids)
);
this.store.dispatch(
    entity.actions.removePredicate(entity => !entity.isActive)
);
this.store.dispatch(
    entity.actions.clear()
);
```

