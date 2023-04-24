import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as GlobalActions from '../actions/global.actions';


@Injectable()
export class GlobalEffects {

  loadGlobals$ = createEffect(() => {
    return this.actions$.pipe(

      // ofType(GlobalActions.loadGlobals),
      // concatMap(() =>
      //   /** An EMPTY observable only emits completion. Replace with your own observable API request */
      //   EMPTY.pipe(
      //     map(data => GlobalActions.loadGlobalsSuccess({ data })),
      //     catchError(error => of(GlobalActions.loadGlobalsFailure({ error }))))
      // )
    );
  });


  constructor(private actions$: Actions) {}
}
