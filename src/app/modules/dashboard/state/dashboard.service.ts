import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    getCountRabbit$ = this._http.get(`${environment.apiProducts}/rabbit/cards`)

    constructor(private readonly _http: HttpClient) {
    }

}