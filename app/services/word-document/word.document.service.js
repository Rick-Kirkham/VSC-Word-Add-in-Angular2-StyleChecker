/// <reference path="../../../typings/index.d.ts" />
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
var WordDocumentService = (function () {
    function WordDocumentService() {
    }
    WordDocumentService.prototype.replaceFoundStringsWithExceptions = function (searchString, replaceString, excludedParagraphs) {
        Word.run(function (context) {
            var foundItems = context.document.body.search(searchString, { matchCase: false, matchWholeWord: true }).load();
            var paras = context.document.body.paragraphs.load();
            return context.sync()
                .then(function () {
                var excludedRanges = [];
                excludedRanges.push(paras.items[excludedParagraphs].getRange('Whole'));
                var replacementCandidates = [];
                for (var i = 0; i < foundItems.items.length; i++) {
                    for (var j = 0; j < excludedRanges.length; j++) {
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
    };
    WordDocumentService.prototype.replaceDocumentContent = function (paragraphs) {
        // Run a batch operation against the Word object model.
        Word.run(function (context) {
            // Create a proxy object for the document body.
            var body = context.document.body;
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
    };
    WordDocumentService.prototype.errorHandler = function (error) {
        console.log("Error: " + error);
        if (error instanceof OfficeExtension.Error) {
            console.log("Debug info: " + JSON.stringify(error.debugInfo));
        }
    };
    WordDocumentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], WordDocumentService);
    return WordDocumentService;
}());
exports.WordDocumentService = WordDocumentService;
//# sourceMappingURL=word.document.service.js.map