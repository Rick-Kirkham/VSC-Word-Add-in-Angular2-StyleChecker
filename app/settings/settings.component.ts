import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { NavigationHeaderComponent} from '../shared/navigation-header/navigation.header.component';
import { ButtonComponent } from '../shared/button/button.component';
import { BrandFooterComponent} from '../shared/brand-footer/brand.footer.component';

@Component({
    templateUrl: 'app/settings/settings.component.html',
    directives: [NavigationHeaderComponent, ButtonComponent, BrandFooterComponent, ROUTER_DIRECTIVES],
    styleUrls: ['app/settings/settings.component.css'],
})
export class SettingsComponent {}

