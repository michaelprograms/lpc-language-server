import {
    BaseSymbol,
    ScopedSymbol,
    MethodSymbol as BaseMethodSymbol,
    ParameterSymbol,
    TypedSymbol,
    IType,
} from "antlr4-c3";
import { IDiagnosticEntry, SymbolKind } from "../types";
import * as vscodelang from "vscode-languageserver";
import {
    IdentifierExpressionContext,
    IncludeDirectiveContext,
    InheritStatementContext,
} from "../parser3/LPCParser";
import {
    EvalScope,
    IEvaluatableSymbol,
    IFoldableSymbol,
    IKindSymbol,
    LpcBaseSymbol,
    getSymbolsOfTypeSync,
} from "./base";
import { VariableSymbol } from "./variableSymbol";
import { ContextSymbolTable } from "../backend/ContextSymbolTable";

export class IdentifierSymbol extends LpcBaseSymbol<IdentifierExpressionContext> {
    public get kind() {
        return SymbolKind.Keyword;
    }
}

export class InheritSymbol
    extends LpcBaseSymbol<InheritStatementContext>
    implements IEvaluatableSymbol
{
    public isLoaded = false;

    public get kind() {
        return SymbolKind.Inherit;
    }

    eval(scope?: any) {
        return scope;
    }
}

export class ArgumentSymbol extends TypedSymbol implements IKindSymbol {
    public get kind() {
        return SymbolKind.Variable;
    }
}

export class BlockSymbol extends ScopedSymbol {}

export class EfunSymbol
    extends BaseMethodSymbol
    implements IKindSymbol, IEvaluatableSymbol
{
    public constructor(
        name: string,
        public returnType?: IType,
        public functionModifiers: Set<string> = new Set()
    ) {
        super(name);
    }
    public get kind() {
        return SymbolKind.Efun;
    }

    public getParametersSync() {
        return getSymbolsOfTypeSync(this, ParameterSymbol);
    }

    eval(scope?: any) {
        return scope;
    }

    public allowsMultiArgs() {
        const prms = this.getParametersSync();
        if (prms.length === 0) return false;
        return (prms[prms.length - 1] as EfunParamSymbol).allowMulti;
    }
}

export class EfunParamSymbol extends ParameterSymbol {
    constructor(name: string, type: IType, public allowMulti?: boolean) {
        super(name, type);
    }
}

export class PreprocessorSymbol extends ScopedSymbol {
    constructor(name: string, public label: string) {
        super(name);
    }
}

const symbolDescriptionMap = new Map<SymbolKind, string>([
    [SymbolKind.Terminal, "Terminal"],
    [SymbolKind.Keyword, "Keyword"],
    [SymbolKind.Include, "Include"],
    [SymbolKind.Method, "Method"],
    [SymbolKind.MethodDeclaration, "Method Declaration"],
    [SymbolKind.Variable, "Variable"],
    [SymbolKind.Define, "Define"],
    [SymbolKind.Inherit, "Inherit"],
    [SymbolKind.InlineClosure, "Inline Closure Callback"],
    [SymbolKind.Efun, "Efun"],
]);

const symbolCodeTypeMap = new Map<SymbolKind, vscodelang.SymbolKind>([
    [SymbolKind.Terminal, vscodelang.SymbolKind.EnumMember],
    [SymbolKind.Keyword, vscodelang.SymbolKind.Key],
    [SymbolKind.Include, vscodelang.SymbolKind.Module],
    [SymbolKind.Inherit, vscodelang.SymbolKind.Module],
    [SymbolKind.Method, vscodelang.SymbolKind.Method],
    [SymbolKind.MethodDeclaration, vscodelang.SymbolKind.Interface],
    [SymbolKind.InlineClosure, vscodelang.SymbolKind.Method],
    [SymbolKind.Variable, vscodelang.SymbolKind.Variable],
    [SymbolKind.Define, vscodelang.SymbolKind.Constant],
]);

/**
 * Provides a textual expression for a native symbol kind.
 *
 * @param kind The kind of symbol for which a description is needed.
 *
 * @returns The description.
 */
export const symbolDescriptionFromEnum = (kind: SymbolKind): string => {
    return symbolDescriptionMap.get(kind) || "Unknown";
};

/**
 * Converts the native symbol kind to a vscode symbol kind.
 *
 * @param kind The kind of symbol for which the vscode kind is needed.
 *
 * @returns The vscode symbol kind for the given ANTLR4 kind.
 */
export const translateSymbolKind = (
    kind: SymbolKind
): vscodelang.SymbolKind => {
    return symbolCodeTypeMap.get(kind) || vscodelang.SymbolKind.Null;
};

const symbolCompletionTypeMap = new Map<
    SymbolKind,
    vscodelang.CompletionItemKind
>([
    [SymbolKind.Terminal, vscodelang.CompletionItemKind.EnumMember],
    [SymbolKind.Keyword, vscodelang.CompletionItemKind.Keyword],
    [SymbolKind.Block, vscodelang.CompletionItemKind.Function],
    [SymbolKind.Define, vscodelang.CompletionItemKind.Variable],
    [SymbolKind.Inherit, vscodelang.CompletionItemKind.Function],
    [SymbolKind.Method, vscodelang.CompletionItemKind.Function],
    [SymbolKind.Variable, vscodelang.CompletionItemKind.Variable],
    [SymbolKind.Operator, vscodelang.CompletionItemKind.Operator],
    [SymbolKind.Efun, vscodelang.CompletionItemKind.Function],
]);

/**
 * Converts the native symbol kind to a vscode completion item kind.
 *
 * @param kind The kind of symbol for which return the completion item kind.
 *
 * @returns The vscode completion item kind.
 */
export const translateCompletionKind = (
    kind: SymbolKind
): vscodelang.CompletionItemKind => {
    return (
        symbolCompletionTypeMap.get(kind) || vscodelang.CompletionItemKind.Text
    );
};

/** Determines the sort order in the completion list. One value for each SymbolKind. */

export const completionSortKeys = new Map<SymbolKind, string>([
    [SymbolKind.Keyword, "05"],
    [SymbolKind.Method, "03"],
    [SymbolKind.Variable, "02"],
    [SymbolKind.Efun, "08"],
    [SymbolKind.Operator, "10"],
]);

// Descriptions for each symbol kind.

export const completionDetails = new Map<SymbolKind, string>([
    [SymbolKind.Keyword, "Keyword"],
    [SymbolKind.Operator, "Operator"],
    [SymbolKind.Efun, "Driver efun"],
    [SymbolKind.Variable, "Variable"],
    [SymbolKind.Method, "Method"],
]);

export class ITypedSymbol {
    type: IType;
}

/**
 * Adds diagnostics to the symbol's SourceContext.
 * @param symbol
 * @param d
 */
export function addDiagnostic(symbol: BaseSymbol, d: IDiagnosticEntry) {
    const ctx = (symbol.symbolTable as ContextSymbolTable).owner;
    ctx.addDiagnostic(d);
}
