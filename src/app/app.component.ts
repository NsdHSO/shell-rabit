import {Component} from '@angular/core';
import {FrameWholeModule} from "ngx-liburg-frame-side";

@Component({
    standalone: true,
    imports: [
        FrameWholeModule
    ],
    selector: 'shell-rabit-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'shell-rabit';
}
