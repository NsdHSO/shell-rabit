import {
    Component, Input, signal, ViewChild
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
export class CardComponent {
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

    setGaugeValue(value: any) {

        const circumference = 2 * Math.PI * 40;
        const offset = circumference - (value / 100) * circumference;
        this.gaugeProgress.nativeElement.style.strokeDasharray = circumference;
        this.gaugeProgress.nativeElement.style.strokeDashoffset = offset;
        this.gaugeText.nativeElement.textContent = `${value}`
    }

    ngOnInit() {
        this.setGaugeValue(+this.ranting * 10);

        setInterval(() => {
                this.setGaugeValue( Math.trunc((Math.random() * 4) * (10 - +this.ranting) + +this.ranting))
            },
            2000)

    }
}
