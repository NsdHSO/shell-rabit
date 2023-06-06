import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { CONFIG_MAIN } from './@core/config';
import { FrameWholeModule } from 'ngx-liburg-frame-side';
import { provideHttpClient } from '@angular/common/http';
import {provideStore, provideState, Store} from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {count} from "./modules/dashboard/state/ngrx/dashboard.reducers";
import {CountRabbitEffects} from "./modules/dashboard/state/ngrx/dashboard.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects([CountRabbitEffects]),
    provideStore({count: count}),
    provideStoreDevtools(),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(FrameWholeModule.forRoot(CONFIG_MAIN)),
    provideHttpClient(),
  ],
};
