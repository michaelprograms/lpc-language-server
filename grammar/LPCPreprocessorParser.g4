
parser grammar LPCPreprocessorParser;

options {
    tokenVocab = LPCPreprocessorLexer;
}

lpcDocument
    : text* EOF
    ;

text
    : code                              # codeText
    | SHARP directive (NEW_LINE | EOF)  # preprocessorDirective
    ;

code
    : CODE+
    ;

directive
    : INCLUDE directive_text                    # preprocessorImport
    | IF preprocessor_expression                # preprocessorConditional
    | ELIF preprocessor_expression              # preprocessorConditional
    | ELSE                                      # preprocessorConditional
    | ENDIF                                     # preprocessorConditional
    | IFDEF CONDITIONAL_SYMBOL                  # preprocessorDef
    | IFNDEF CONDITIONAL_SYMBOL                 # preprocessorDef
    | UNDEF CONDITIONAL_SYMBOL                  # preprocessorDef
    | PRAGMA directive_text                     # preprocessorPragma
    | DEFINE CONDITIONAL_SYMBOL directive_text? # preprocessorDefine
    ;

directive_text
    : TEXT+
    ;

preprocessor_expression
    : TRUE                                                                     # preprocessorConstant
    | FALSE                                                                    # preprocessorConstant
    | DECIMAL_LITERAL                                                          # preprocessorConstant
    | DIRECTIVE_STRING                                                         # preprocessorConstant
    | CONDITIONAL_SYMBOL (LPAREN preprocessor_expression RPAREN)?              # preprocessorConditionalSymbol
    | LPAREN preprocessor_expression RPAREN                                    # preprocessorParenthesis
    | BANG preprocessor_expression                                             # preprocessorNot
    | preprocessor_expression op = (EQUAL | NOTEQUAL) preprocessor_expression  # preprocessorBinary
    | preprocessor_expression op = AND preprocessor_expression                 # preprocessorBinary
    | preprocessor_expression op = OR preprocessor_expression                  # preprocessorBinary
    | preprocessor_expression op = (LT | GT | LE | GE) preprocessor_expression # preprocessorBinary
    | DEFINED (CONDITIONAL_SYMBOL | LPAREN CONDITIONAL_SYMBOL RPAREN)          # preprocessorDefined
    ;