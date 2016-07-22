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
var fabric_textfield_wrapper_component_1 = require('../shared/office-fabric-component-wrappers/fabric.textfield.wrapper.component');
var button_component_1 = require('../shared/button/button.component');
var navigation_header_component_1 = require('../shared/navigation-header/navigation.header.component');
var brand_footer_component_1 = require('../shared/brand-footer/brand.footer.component');
var word_document_service_1 = require('../services/word-document/word.document.service');
var FindAndReplaceComponent = (function () {
    function FindAndReplaceComponent(wordDocument) {
        this.wordDocument = wordDocument;
        console.log("FindAndReplaceComponent ctor running");
    }
    FindAndReplaceComponent.prototype.ngAfterViewInit = function () {
        console.log("find and replace finished view init");
    };
    FindAndReplaceComponent.prototype.onSearchTextEntered = function (message) {
        this.searchString = message;
    };
    FindAndReplaceComponent.prototype.onReplaceTextEntered = function (message) {
        this.replaceString = message;
    };
    FindAndReplaceComponent.prototype.onParagraphNumeralEntered = function (message) {
        this.excludedParagraphs = message;
    };
    FindAndReplaceComponent.prototype.replace = function () {
        console.log(this.searchString);
        this.wordDocument.replaceFoundStringsWithExceptions(this.searchString, this.replaceString, this.excludedParagraphs);
    };
    FindAndReplaceComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/find-and-replace/find-and-replace.component.html',
            styleUrls: ['app/find-and-replace/find-and-replace.component.css'],
            directives: [navigation_header_component_1.NavigationHeaderComponent, fabric_textfield_wrapper_component_1.FabricTextFieldWrapperComponent,
                button_component_1.ButtonComponent, brand_footer_component_1.BrandFooterComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [word_document_service_1.WordDocumentService])
    ], FindAndReplaceComponent);
    return FindAndReplaceComponent;
}());
exports.FindAndReplaceComponent = FindAndReplaceComponent;
//# sourceMappingURL=find-and-replace.component.js.map