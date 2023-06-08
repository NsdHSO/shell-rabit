import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from "@ngrx/store";
import {JumbotronDirective, NgxBtxDirective} from "ngx-ds";
import {
    CardComponent
} from "./components/card/card.component";
import {
    initDashboard
} from "./state/ngrx/actions/dashboard.action";
import {
    selectCards
} from "./state/ngrx/selector/dashboard.selector";

@Component({
    selector : 'shell-rabit-dashboard',
    standalone : true,
    imports : [CommonModule, NgxBtxDirective, JumbotronDirective, CardComponent],
    templateUrl : './dashboard.component.html',
    styleUrls : ['./dashboard.component.scss'],
})
export class DashboardComponent {
    $data = this.store.select(selectCards)

    constructor(private store: Store<any>,) {

    }

    ngOnInit() {
        this.store.dispatch(initDashboard())
    }



}
