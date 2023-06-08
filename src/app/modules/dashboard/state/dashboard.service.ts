import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn : 'root'
})
export class DashboardService {
    getCountRabbit$ = this._http.get(`${process.env['NX_API_URL']}/rabbit/cards`)

    constructor(private readonly _http: HttpClient) {
    }
}