import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as GlobalActions from '../actions/global.actions';


@Injectable()
export class GlobalEffects {
  constructor(private actions$: Actions) {}
}
