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
var TextField_1 = require('./TextField');
var FabricTextFieldWrapperComponent = (function () {
    function FabricTextFieldWrapperComponent(element) {
        this.element = element;
        this.value = "";
        this.textEntered = new core_1.EventEmitter();
    }
    FabricTextFieldWrapperComponent.prototype.ngAfterViewInit = function () {
        var componentElement = this.element.nativeElement.children[0];
        this.field = new TextField_1.TextField(componentElement);
    };
    FabricTextFieldWrapperComponent.prototype.onValueChanged = function () {
        this.value = this.field._textField.value;
        this.textEntered.emit(this.value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FabricTextFieldWrapperComponent.prototype, "innerlabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FabricTextFieldWrapperComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FabricTextFieldWrapperComponent.prototype, "value", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FabricTextFieldWrapperComponent.prototype, "textEntered", void 0);
    FabricTextFieldWrapperComponent = __decorate([
        core_1.Component({
            selector: 'of-textfield',
            templateUrl: 'app/shared/office-fabric-component-wrappers/fabric.textfield.wrapper.component.html',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], FabricTextFieldWrapperComponent);
    return FabricTextFieldWrapperComponent;
}());
exports.FabricTextFieldWrapperComponent = FabricTextFieldWrapperComponent;
//# sourceMappingURL=fabric.textfield.wrapper.component.js.map