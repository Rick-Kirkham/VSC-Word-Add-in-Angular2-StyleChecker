import { Component, OnChanges, Input, DoCheck,
         Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

import { TextField } from './TextField';

@Component({
    selector: 'of-textfield',
    templateUrl: 'app/shared/office-fabric-component-wrappers/fabric.textfield.wrapper.component.html',
})
export class FabricTextFieldWrapperComponent implements AfterViewInit {
    
    private field: TextField;
    @Input() innerlabel: string;
    @Input() id: string;
    @Input() value: string ="";
    @Output() textEntered:  EventEmitter<string> = new EventEmitter<string>();
  

    constructor(private element: ElementRef ){
    }

    ngAfterViewInit() {
        let componentElement: HTMLElement = this.element.nativeElement.children[0];
        this.field = new TextField(componentElement);
    }

    onValueChanged(): void {
        this.value = this.field._textField.value;
        this.textEntered.emit(this.value);
    }
}