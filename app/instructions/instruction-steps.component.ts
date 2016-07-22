import { Component, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { ButtonComponent } from '../shared/button/button.component';
import { IInstructionStep } from './IInstructionStep';

@Component({
    templateUrl: 'app/instructions/instruction-steps.component.html',
    directives: [ButtonComponent, ROUTER_DIRECTIVES],
    styleUrls: ['app/instructions/instruction-steps.component.css'],
})
export class InstructionStepsComponent implements AfterViewInit, OnDestroy{ 
    
    constructor(private router: Router) {}

    openFindAndReplaceView() {
        let link = ['/find-and-replace'];
        this.router.navigate(link);
    }
       
    ngOnDestroy() {
         console.log("InstructionSteps being destroyed");
        //  console.log($("main"));
        //  $("#main").remove();
        //  console.log($("main"));
    }

    ngAfterViewInit() {
        console.log("InstructionSteps after view init running");
    }

    private title: string = "WELCOME";
    private addin_description: string = "Style Checker enables you to enforce style rules while exempting paragraphs that you specify from the rules.";
    private steps_intro: string = "Just take these steps:";
    private steps: Array<IInstructionStep> = 
        [{step_number: 1, content: "Enter a string in the Find box."}, 
         {step_number: 2, content: "Enter a replacement string in the Replace With box."}, 
         {step_number: 3, content: "Enter the zero-based numbers of the parapgraphs that should be exempt in the Skip Paragraphs box."},
         {step_number: 4, content: "Press Replace."}];
  
}

