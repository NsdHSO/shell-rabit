import {
    Component, Input, OnInit, signal, ViewChild
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";

@Component({
    selector : 'shell-rabbit-card',
    standalone : true,
    imports : [CommonModule, MatIconModule],
    templateUrl : './card.component.html',
    styleUrls : ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @ViewChild('gaugeProgress',
        {static : true}) gaugeProgress: ViewChild | any
    @ViewChild('gaugeText',
        {static : true}) gaugeText: ViewChild | any

    /**
     * The component's prop name.
     * @type {string}
     * @public
     */
    @Input() public name = signal('');

    /**
     * The component's prop icon.
     * @type {string}
     * @public
     */
    @Input() public icon = signal('');

    /**
     * The component's prop ranting.
     * @type {string}
     * @public
     */
    @Input() public ranting = signal('');

    /**
     * Initializes the component and sets the initial gauge value.
     * @returns {void}
     */
    ngOnInit() {
        this.setGaugeValue(+this.ranting * 10);
    }

    /**
     * Sets the gauge value and updates the gauge display.
     * @param {number} value - The value to set for the
     * gauge.
     * @returns {void}
     */
    setGaugeValue(value: number) {
        const circumference = 2 * Math.PI * 40;
        const offset = circumference - (value > 100 ? 99 : value / 100) * circumference;
        this.gaugeProgress.nativeElement.style.strokeDasharray = circumference;
        this.gaugeProgress.nativeElement.style.strokeDashoffset = offset;
        this.gaugeText.nativeElement.textContent = `${value} avg`;
        this.gaugeText.nativeElement.style.fontSize = '12px';
    }
}
