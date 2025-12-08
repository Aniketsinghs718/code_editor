# Code Editor

A simple web-based code editor built with Next.js that allows users to write JavaScript code, run it in the browser, automatically fix common mistakes, and get instant help through an intelligent help system.

## Features

- 🎨 **Monaco Editor** - Professional code editor with syntax highlighting
- ▶️ **Run Code** - Execute JavaScript directly in the browser
- ✨ **Auto-Fix** - Automatically correct semicolons, indentation, spacing, and brackets
- ❓ **Help System** - Keyword-based help with examples for common programming topics
- 🌙 **Dark/Light Theme** - Toggle between themes

# Code Editor

This repository contains a small web-based code editor built with Next.js. The editor includes an auto-fix feature that applies a set of deterministic rules to tidy code, and a keyword-driven help system that returns concise guidance and examples.

## Auto-Fix Rules
The editor applies the following auto-fix rules, in this order:

- `Remove Extra Spaces`: Collapse multiple internal spaces into a single space while preserving indentation.
- `Add Semicolons`: Add missing semicolons to statement-like lines (variable declarations, returns, simple expressions) where appropriate.
- `Fix Indentation`: Normalize indentation to two spaces per nesting level and trim empty lines.
- `Fix Brackets`: Ensure matching closing brackets for `{`, `(`, and `[` by appending missing closers when possible.

Auto-fix is implemented in `code-editor-app/lib/autoFix.ts` and is applied deterministically to the editor content. It is intended for simple, common formatting issues and does not perform semantic code transformations.

## Help Keywords
The help system is keyword-driven. Enter a short query and the editor matches keywords to provide a brief topic response and examples. Common keywords to try:

- `semicolon` or `;`
- `indent`, `format`
- `bracket`, `brace`, `{`, `}`
- `function`
- `variable`, `const`, `let`
- `loop`, `for`, `while`
- `if`, `else`, `condition`
- `array`
- `object`
- `string`
- `error`, `bug`, `debug`
- `console`, `log`, `print`
- `return`
- `comment`, `//`
- `autofix`, `fix`
- `run`, `execute`

The help logic and available topics are defined in `code-editor-app/lib/helpSystem.ts`.

## Quick Start
To run the app locally:

```bash
cd code-editor-app
npm install
npm run dev
```

Visit `http://localhost:3000` to open the editor.

## Notes
- This README intentionally avoids emoji and keeps the guidance short.
- For full app details see `code-editor-app/README.md`.
