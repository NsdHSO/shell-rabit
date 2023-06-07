import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {NgxBtxDirective} from "ngx-ds";
import {Router} from "@angular/router";

@Component({
    selector: 'shell-rabit-not-found',
    standalone: true,
    imports: [CommonModule, MatIconModule, NgxBtxDirective],
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
    private readonly _router: Router = inject(Router)

    goToDashboard() {
        this._router.navigate(['dashboard'])
    }

}
