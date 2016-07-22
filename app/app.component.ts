import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { WordDocumentService } from './services/word-document/word.document.service';


@Component({
    selector: 'sc-app',
    template: `
    <div>        
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [WordDocumentService, HTTP_PROVIDERS]
})

export class AppComponent implements OnInit {

    ngOnInit() {
        Office.initialize = function() {};
    }
}
