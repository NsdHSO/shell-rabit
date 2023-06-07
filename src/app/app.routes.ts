import {Route} from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'dashboard',
        loadComponent: () =>
            import('./modules/dashboard/dashboard.component').then(
                (c) => c.DashboardComponent
            ),

    },
    {
        path: 'notFound',
        loadComponent: () =>
            import('./modules/notFound/not-found.component').then(
                (c) => c.NotFoundComponent
            ),
    },
    {
        path: '**',
        redirectTo: 'notFound',
    },
];
