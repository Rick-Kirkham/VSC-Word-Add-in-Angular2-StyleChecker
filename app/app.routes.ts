import { provideRouter, RouterConfig } from '@angular/router';

import { FindAndReplaceComponent } from './find-and-replace/find-and-replace.component';
import { InstructionStepsComponent } from './instructions/instruction-steps.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: RouterConfig = [  
  { path: 'settings', component: SettingsComponent },
  { path: 'find-and-replace', component: FindAndReplaceComponent },
  { path: 'instruction-steps', component: InstructionStepsComponent },
  { path: '', redirectTo: '/instruction-steps', pathMatch: 'full'}
];


export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];


