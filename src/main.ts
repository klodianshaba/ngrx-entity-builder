import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing';
import { isDevMode } from '@angular/core';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';
import { metaReducers, reducers } from './app/store';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore(reducers, { metaReducers }),
    provideStoreDevtools({
      connectInZone: true,
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
  ],
}).then();
