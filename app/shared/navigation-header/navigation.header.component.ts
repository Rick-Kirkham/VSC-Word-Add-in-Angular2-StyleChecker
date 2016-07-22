import { Component, OnChanges, Input,
         Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

import { ContextualMenuButtonComponent } from '../contextual-menu-button/contextual.menu.button.component';
import { FabricContextualMenuWrapperComponent } from '../office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component';

@Component({
    selector: 'sc-navigation-header',
    templateUrl: 'app/shared/navigation-header/navigation.header.component.html',
    styleUrls: ['app/shared/navigation-header/navigation.header.component.css'],
    directives: [ContextualMenuButtonComponent, FabricContextualMenuWrapperComponent]
})
export class NavigationHeaderComponent {

    // constructor(private element: ElementRef ){
    //     console.log("ctor for header");
        
    // }

    // ngAfterViewInit() {
          
    //       let headerElement: HTMLElement = this.element.nativeElement.children[0];
    //       console.log("header: " + headerElement.classList);
    //       let buttonElement: Element = headerElement.children[0];
    //       console.log("button: " + buttonElement.classList);
    //       let menuElement: Element = headerElement.children[1];
    //       console.log("menu: " + menuElement.classList);




    //      // Initialize fabric components
    //         // if ($.fn.ContextualMenu) {
    //         //     $('.ms-ContextualMenu').ContextualMenu();
    //         // }

    //         // $('#myButton').click(function () {
    //         //     document.getElementById("myDropdown").classList.toggle("is-open");
    //         // });
    // }
}
