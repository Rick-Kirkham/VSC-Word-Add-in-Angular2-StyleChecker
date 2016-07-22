///<reference path="../../../typings/index.d.ts"/>
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var word_document_service_1 = require('../../services/word-document/word.document.service');
// import { ContextualMenu } from './ContextualMenu';
// import { ContextualHost } from './ContextualHost';
var FabricContextualMenuWrapperComponent = (function () {
    // private field: ContextualMenu;
    function FabricContextualMenuWrapperComponent(element, wordDocument) {
        this.element = element;
        this.wordDocument = wordDocument;
    }
    FabricContextualMenuWrapperComponent.prototype.insertSampleContent = function () {
        this.wordDocument.replaceDocumentContent([
            "This is a sample paragraph inserted in the document. This is another Msft sentence.",
            "This is another sample paragraph inserted in the document. This is another Msft sentence.",
            "This is still another sample paragraph inserted in the document. This is another Msft sentence."
        ]);
    };
    FabricContextualMenuWrapperComponent.prototype.ngAfterViewInit = function () {
        if ($.fn.ContextualMenu) {
            $('.ms-ContextualMenu').ContextualMenu();
        }
    };
    FabricContextualMenuWrapperComponent = __decorate([
        core_1.Component({
            selector: 'of-contextual-menu',
            templateUrl: 'app/shared/office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            styleUrls: ['app/shared/office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, word_document_service_1.WordDocumentService])
    ], FabricContextualMenuWrapperComponent);
    return FabricContextualMenuWrapperComponent;
}());
exports.FabricContextualMenuWrapperComponent = FabricContextualMenuWrapperComponent;
//# sourceMappingURL=fabric.contextual.menu.wrapper.component.js.map