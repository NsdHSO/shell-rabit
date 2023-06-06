import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {NgxBtxDirective} from "ngx-ds";
import {loadCount} from "./state/ngrx/dashboard.actions";

@Component({
    selector: 'shell-rabit-dashboard',
    standalone: true,
    imports: [CommonModule, NgxBtxDirective],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    public count$ = this.store.select('count');

    constructor(private store: Store<{ count: number }>,) {
    }

    increment() {
    }

    ngOnInit(){
        this.store.dispatch(loadCount())
    }
}
