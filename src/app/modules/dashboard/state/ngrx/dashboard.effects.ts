import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {DashboardCountService} from "../dashboardCount.service";
import {init, loadCount, loadCountFailure} from "./dashboard.actions";

@Injectable()
export class CountRabbitEffects {

    loadCountEffects$ = createEffect(() => this._action$.pipe(
        ofType(init),
        switchMap(() => this._dashboardCountService.getCountRabbit$.pipe(map(count => ({
            loadCount,
            payload: count
        })), tap(console.log), catchError(err => {
            console.log(err)
            return of({type: loadCountFailure, err})
        })))
    ))


    constructor(private readonly _action$: Actions, private readonly _dashboardCountService: DashboardCountService) {
    }
}