# Ngrx Entity Builder

Ngrx utilities taking rid of complexity and boilerplate code

## Quick Links

[Demo](https://klodianshaba.github.io/ngrx-entity-builder/)

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
    entity.selectors.selectState
);
this.store.select(
    entity.selectors.selectEntities
);
this.store.select(
    entity.selectors.selectAll
);
this.store.select(
    entity.selectors.selectIds
);
this.store.select(
    entity.selectors.selectTotal
);
this.store.select(
    entity.selectors.selectById(1)
);
this.store.select(
    entity.selectors.selectByIds([1,2])
);
this.store.select(
    entity.selectors.selectByPredicate(entity => entity.isActive)
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
        { id: 1, changes: entity }
    )
);
this.store.dispatch(
    entity.actions.updateMany(
        [
            { id: 1, changes: entity },
            { id: 2, changes: entity }
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
          id: 1,
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
    entity.actions.removeOne(1)
);
this.store.dispatch(
    entity.actions.removeMany([1, 2])
);
this.store.dispatch(
    entity.actions.removePredicate(entity => !entity.isActive)
);
this.store.dispatch(
    entity.actions.clear()
);
```

