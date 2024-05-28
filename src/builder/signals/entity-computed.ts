import { EntitySignals } from '@ngrx/signals/entities/src/models';
import { computed } from '@angular/core';

export const entityComputed = <T>(store: EntitySignals<T>) => {
  return {
    count: computed(() => store.entities().length),
  };
};
