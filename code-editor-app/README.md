# Code Editor - JavaScript Web IDE

A web-based code editor built with Next.js for writing, running, and auto-fixing JavaScript code with integrated help.

## Features

- **Code Editor**: Monaco Editor with syntax highlighting
- **Run Code**: Execute JavaScript in browser with console output
- **Auto-Fix**: Automatically fix semicolons, indentation, spacing, and brackets
- **Help System**: Keyword-based help with 16 topics and examples

## Installation

```bash
git clone https://github.com/Aniketsinghs718/code_editor.git
cd code_editor/code-editor-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Auto-Fix Rules

1. **Add Semicolons** - Adds missing semicolons to statements
2. **Fix Indentation** - Standardizes to 2-space indentation  
3. **Remove Extra Spaces** - Cleans up multiple spaces
4. **Fix Brackets** - Adds missing closing brackets

## Help Keywords

Search for: semicolons, indentation, brackets, functions, variables, loops, conditionals, arrays, objects, strings, errors, console, return, comments, auto-fix, running

## Usage

1. Write JavaScript code in the editor
2. Click **Run Code** to execute
3. Click **Auto-Fix** to correct common issues
4. Click **Help** to search for programming topics

## Tech Stack

- Next.js 16.0
- TypeScript 5.0
- Monaco Editor
- Tailwind CSS 4.0


