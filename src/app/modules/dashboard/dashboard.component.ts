import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import {
    CarouselContainerComponent,
    JumbotronDirective,
    NgxBtxDirective,
} from 'ngx-ds';
import { CardComponent } from './components/card/card.component';
import { initDashboard } from './state/ngrx/actions/dashboard.action';
import { selectCards } from './state/ngrx/selector/dashboard.selector';

@Component({
    selector: 'shell-rabit-dashboard',
    standalone: true,
    imports: [AsyncPipe, NgIf, NgxBtxDirective, CarouselContainerComponent],
    template: `<div
    *ngIf="data() as dahsboardReducer"
    class="dashboard-container"
  >
    <lib-carousel [items]="dahsboardReducer.cards.entry"></lib-carousel>
    <ng-container *ngIf="dahsboardReducer.cards.loading">
      Loading
    </ng-container>
    <div *ngIf="dahsboardReducer.cards.failed">Failed</div>
  </div> `,
    styleUrls: ['./dashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
    private readonly _store = inject(Store);
    data = this._store.selectSignal(selectCards);

    constructor() {
        this._store.dispatch(initDashboard());
    }
}
