import * as vscode from 'vscode';
import type * as Proto from './protocol/protocol';

export namespace Range {
	export const fromTextSpan = (span: Proto.TextSpan): vscode.Range =>
		fromLocations(span.start, span.end);

	export const toTextSpan = (range: vscode.Range): Proto.TextSpan => ({
		start: Position.toLocation(range.start),
		end: Position.toLocation(range.end)
	});

	export const fromLocations = (start: Proto.Location, end: Proto.Location): vscode.Range =>
		new vscode.Range(
			Math.max(0, start.line - 1), Math.max(start.offset - 1, 0),
			Math.max(0, end.line - 1), Math.max(0, end.offset - 1));

	export const toFileRangeRequestArgs = (file: string, range: vscode.Range): Proto.FileRangeRequestArgs => ({
		file,
		startLine: range.start.line + 1,
		startOffset: range.start.character + 1,
		endLine: range.end.line + 1,
		endOffset: range.end.character + 1
	});

	// export const toFormattingRequestArgs = (file: string, range: vscode.Range): Proto.FormatRequestArgs => ({
	// 	file,
	// 	line: range.start.line + 1,
	// 	offset: range.start.character + 1,
	// 	endLine: range.end.line + 1,
	// 	endOffset: range.end.character + 1
	// });
}


export namespace Position {
	export const fromLocation = (tslocation: Proto.Location): vscode.Position =>
		new vscode.Position(tslocation.line - 1, tslocation.offset - 1);

	export const toLocation = (vsPosition: vscode.Position): Proto.Location => ({
		line: vsPosition.line + 1,
		offset: vsPosition.character + 1,
	});

	export const toFileLocationRequestArgs = (file: string, position: vscode.Position): Proto.FileLocationRequestArgs => ({
		file,
		line: position.line + 1,
		offset: position.character + 1,
	});
}

export namespace Location {
	export const fromTextSpan = (resource: vscode.Uri, tsTextSpan: Proto.TextSpan): vscode.Location =>
		new vscode.Location(resource, Range.fromTextSpan(tsTextSpan));
}

