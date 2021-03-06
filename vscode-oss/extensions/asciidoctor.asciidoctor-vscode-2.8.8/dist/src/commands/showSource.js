"use strict";
/*---------------------------------------------------------------------------------------------
  *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowSourceCommand = void 0;
const vscode = require("vscode");
class ShowSourceCommand {
    constructor(previewManager) {
        this.previewManager = previewManager;
        this.id = 'asciidoc.showSource';
    }
    execute() {
        if (this.previewManager.activePreviewResource) {
            return vscode.workspace.openTextDocument(this.previewManager.activePreviewResource)
                .then((document) => vscode.window.showTextDocument(document));
        }
        return undefined;
    }
}
exports.ShowSourceCommand = ShowSourceCommand;
//# sourceMappingURL=showSource.js.map