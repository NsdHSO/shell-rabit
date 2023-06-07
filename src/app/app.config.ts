import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {
    provideRouter,
    withEnabledBlockingInitialNavigation,
} from '@angular/router';
import {appRoutes} from './app.routes';
import {CONFIG_MAIN} from './@core/config';
import {FrameWholeModule} from 'ngx-liburg-frame-side';
import {provideHttpClient} from '@angular/common/http';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {provideAnimations} from "@angular/platform-browser/animations";
import {IconCoreModule} from "ngx-liburg-icon";
import {
    dashboardReducer
} from "./modules/dashboard/state/ngrx/reducers/dashboard.reducer";
import {
    DashboardEffects
} from "./modules/dashboard/state/ngrx/effects/dashboard.effects";

export const appConfig: ApplicationConfig = {
    providers: [
        provideEffects(DashboardEffects),
        provideStore({dashboardReducer}),
        provideStoreDevtools(),
        provideAnimations(),
        importProvidersFrom(IconCoreModule),
        provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
        importProvidersFrom(FrameWholeModule.forRoot(CONFIG_MAIN)),
        provideHttpClient(),
    ],
};
