import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";

@Component({
    selector : 'shell-rabbit-card',
    standalone : true,
    imports : [CommonModule, MatIconModule],
    templateUrl : './card.component.html',
    styleUrls : ['./card.component.scss']
})
export class CardComponent {
    /**
     * The component's prop name.
     * @type {string}
     * @public
     */
    @Input() public name = '';

    /**
     * The component's prop icon.
     * @type {string}
     * @public
     */
    @Input() public icon = '';

    /**
     * The component's prop ranting.
     * @type {string}
     * @public
     */
    @Input() public ranting = '';
}
