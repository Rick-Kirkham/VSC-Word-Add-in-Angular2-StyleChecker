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
var navigation_header_component_1 = require('../shared/navigation-header/navigation.header.component');
var button_component_1 = require('../shared/button/button.component');
var brand_footer_component_1 = require('../shared/brand-footer/brand.footer.component');
var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/settings/settings.component.html',
            directives: [navigation_header_component_1.NavigationHeaderComponent, button_component_1.ButtonComponent, brand_footer_component_1.BrandFooterComponent, router_1.ROUTER_DIRECTIVES],
            styleUrls: ['app/settings/settings.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map