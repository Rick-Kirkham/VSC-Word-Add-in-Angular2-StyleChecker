import { Component, OnChanges, Input,
         Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'sc-contextual-menu-button',
    templateUrl: 'app/shared/contextual-menu-button/contextual.menu.button.component.html',
    styleUrls: ['app/shared/contextual-menu-button/contextual.menu.button.component.css'],
})
export class ContextualMenuButtonComponent implements AfterViewInit{

    

    ngAfterViewInit() {
        $('#myButton').click(function () {
                document.getElementById("myDropdown").classList.toggle("is-open");
            });
    }
}
