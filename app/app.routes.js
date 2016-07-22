"use strict";
var router_1 = require('@angular/router');
var find_and_replace_component_1 = require('./find-and-replace/find-and-replace.component');
var instruction_steps_component_1 = require('./instructions/instruction-steps.component');
var settings_component_1 = require('./settings/settings.component');
exports.routes = [
    { path: 'settings', component: settings_component_1.SettingsComponent },
    { path: 'find-and-replace', component: find_and_replace_component_1.FindAndReplaceComponent },
    { path: 'instruction-steps', component: instruction_steps_component_1.InstructionStepsComponent },
    { path: '', redirectTo: '/instruction-steps', pathMatch: 'full' }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map