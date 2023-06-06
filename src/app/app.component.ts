import { Component } from '@angular/core';
import { IconCoreModule } from "ngx-liburg-icon";
import { HttpClientModule } from "@angular/common/http";
import { FrameWholeModule } from "ngx-liburg-frame-side";

@Component({
    standalone: true,
    imports: [
        IconCoreModule,
        FrameWholeModule
    ],
    selector: 'shell-rabit-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
    title = 'shell-rabit';
}
