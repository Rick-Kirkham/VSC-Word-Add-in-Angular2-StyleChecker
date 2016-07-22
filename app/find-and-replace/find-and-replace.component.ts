import { Component, OnInit, OnChanges, DoCheck,
    Input, 
    AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked }  from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';


import { FabricTextFieldWrapperComponent } from '../shared/office-fabric-component-wrappers/fabric.textfield.wrapper.component';
import { ButtonComponent } from '../shared/button/button.component';
import { NavigationHeaderComponent} from '../shared/navigation-header/navigation.header.component';
import { BrandFooterComponent} from '../shared/brand-footer/brand.footer.component';

import { WordDocumentService } from '../services/word-document/word.document.service';

@Component({
    templateUrl: 'app/find-and-replace/find-and-replace.component.html',
    styleUrls: ['app/find-and-replace/find-and-replace.component.css'],
    directives: [NavigationHeaderComponent, FabricTextFieldWrapperComponent, 
                 ButtonComponent, BrandFooterComponent, ROUTER_DIRECTIVES]
})
export class FindAndReplaceComponent implements AfterViewInit{

    private searchString: string;
    private replaceString: string;
    private excludedParagraphs: string;


    constructor(private wordDocument: WordDocumentService) {
        console.log("FindAndReplaceComponent ctor running")
    } 

    ngAfterViewInit() {
        console.log("find and replace finished view init");
    }

    onSearchTextEntered(message: string): void {
        this.searchString = message;
    }

     onReplaceTextEntered(message: string): void {
        this.replaceString = message;
    }

     onParagraphNumeralEntered(message: string): void {
        this.excludedParagraphs = message;
    }

    replace() {
        console.log(this.searchString);
        this.wordDocument.replaceFoundStringsWithExceptions(this.searchString, this.replaceString, this.excludedParagraphs);
    }
}
