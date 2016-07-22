///<reference path="../../../typings/index.d.ts"/>

import { Component, OnChanges, Input,
         Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { WordDocumentService } from '../../services/word-document/word.document.service';

// import { ContextualMenu } from './ContextualMenu';
// import { ContextualHost } from './ContextualHost';

@Component({
    selector: 'of-contextual-menu',
    templateUrl: 'app/shared/office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component.html',
    directives: [ROUTER_DIRECTIVES],
    styleUrls:['app/shared/office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component.css']
})
export class FabricContextualMenuWrapperComponent implements AfterViewInit {
    
   // private field: ContextualMenu;

    constructor(private element: ElementRef, 
                private wordDocument: WordDocumentService){
        
    }

    insertSampleContent() {
        this.wordDocument.replaceDocumentContent([
            "This is a sample paragraph inserted in the document. This is another Msft sentence.",
            "This is another sample paragraph inserted in the document. This is another Msft sentence.",
            "This is still another sample paragraph inserted in the document. This is another Msft sentence."
        ]);
    }


     ngAfterViewInit() {
        if ($.fn.ContextualMenu) {
                $('.ms-ContextualMenu').ContextualMenu();
            }
    }
}