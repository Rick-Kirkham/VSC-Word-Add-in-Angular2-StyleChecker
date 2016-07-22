import { Component, Input,
         Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sc-button',
    templateUrl: 'app/shared/button/button.component.html'
})
export class ButtonComponent {
     
     @Input() buttonlabel: string;
}
