/// <reference path="../../../typings/index.d.ts" />

import { Injectable } from '@angular/core';
import { IReplacementCandidate } from './IReplacementCandidate';


@Injectable()
export class WordDocumentService {

    replaceFoundStringsWithExceptions(searchString: string, replaceString: string, excludedParagraphs: string) {
        Word.run(function (context) {

            let foundItems: Word.SearchResultCollection = context.document.body.search(searchString, { matchCase: false, matchWholeWord: true }).load();
            let paras : Word.ParagraphCollection = context.document.body.paragraphs.load();
            return context.sync()

                .then(function () {          
                    let excludedRanges: Array<Word.Range> = [];
                    excludedRanges.push(paras.items[excludedParagraphs].getRange('Whole'));

                    let replacementCandidates : Array<IReplacementCandidate> = [];

                    for (let i = 0; i < foundItems.items.length; i++) {
                        for (let j = 0; j < excludedRanges.length; j++) {                 
                            replacementCandidates.push({
                                range: foundItems.items[i],
                                locationRelation: foundItems.items[i].compareLocationWith(excludedRanges[j])
                            });
                        }
                    }
                    return context.sync()
                        .then(function () {

                            replacementCandidates.forEach(function (item) {
                                switch (item.locationRelation.value) {
                                    case "Inside":
                                    case "Equal":
                                        break;
                                    default:
                                        item.range.insertText(replaceString, 'Replace');
                                }
                            });
                        });
                });
        })
        .catch(this.errorHandler);
    }
    
    
    
    replaceDocumentContent(paragraphs: Array<string>) {

        // Run a batch operation against the Word object model.
        Word.run(function (context) {

            // Create a proxy object for the document body.
            let body = context.document.body;

            // Queue a commmand to clear the contents of the body.
            body.clear();

            // Queue commands to insert text into the end of the Word document body.
            body.insertText(paragraphs[0], "End");
            body.insertParagraph(paragraphs[1], 'End');
            body.insertParagraph(paragraphs[2], 'End');

            // Synchronize the document state by executing the queued commands, and return a promise to indicate task completion.
            return context.sync();
        })
        .catch(this.errorHandler);
    }

    errorHandler(error: any){
        console.log("Error: " + error);
        if (error instanceof OfficeExtension.Error) {
            console.log("Debug info: " + JSON.stringify(error.debugInfo));
        }

    }
}