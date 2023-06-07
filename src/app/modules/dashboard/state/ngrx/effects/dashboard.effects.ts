import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {DashboardService} from "../../dashboard.service";
import {
    failedLoadDashboard, initDashboard, successLoadDashboard
} from "../actions/dashboard.action";
import {catchError, map, of, switchMap} from "rxjs";

@Injectable()
export class DashboardEffects {
    loadDashboard$ = createEffect(() => {
        return this._actions$
            .pipe(ofType(initDashboard),
                switchMap(() => this._dashboardService.getCountRabbit$.pipe(map(cards => successLoadDashboard({cards})),
                    catchError((err: any) => {
                        return of(failedLoadDashboard(err))
                    }))))
    })

    constructor(private readonly _actions$: Actions,
        private readonly _dashboardService: DashboardService) {
    }
}

