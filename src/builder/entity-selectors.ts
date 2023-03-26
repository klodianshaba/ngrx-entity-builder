import {createSelector} from "@ngrx/store";
import {EntityAdapter, EntityState, Predicate,} from "@ngrx/entity";
import {MemoizedSelector} from "@ngrx/store/src/selector";
export const entitySelectors = <T, A> (featureSelector: MemoizedSelector<object, object>, featureKey: string, adapter: EntityAdapter<T>) => {
    const selectState = createSelector<object, object, EntityState<T> & A>(
        featureSelector,
        (state) => (featureKey) ? state[featureKey] : state
    );
    const adapterSelectors = adapter.getSelectors();
    const selectEntities = createSelector(
        selectState,
        adapterSelectors.selectEntities
    );
    const selectAll = createSelector(
        selectState,
        adapterSelectors.selectAll
    );
    const selectIds = createSelector(
        selectState,
        adapterSelectors.selectIds
    );
    const selectTotal = createSelector(
        selectState,
        adapterSelectors.selectTotal
    );
    const selectById = (id: number) => createSelector(
        selectAll,
        (data) => data.find(item => (item as any)?.id  == id)
    )
    const selectByIds = (ids: number[]) => createSelector(
        selectAll,
        (data) => data.filter(item => ids.includes((item as any)?.id))
    )
    const selectByPredicate = (predicate: Predicate<T>) => createSelector(
        selectAll,
        (data) => data.filter(data => predicate(data))
    )
    return {selectState, selectEntities, selectAll, selectIds, selectTotal, selectById, selectByIds, selectByPredicate};
}
