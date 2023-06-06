import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class DashboardCountService {
    getCountRabbit$ = this._http.get(`${environment.apiProducts}/rabbit/count`)

    constructor(private readonly _http: HttpClient) {
    }
}