export interface HelpResponse {
  title: string;
  content: string;
  examples?: string[];
}

const helpTopics: { keywords: string[]; response: HelpResponse }[] = [
  {
    keywords: ['semicolon', ';'],
    response: {
      title: 'Semicolons',
      content: 'Semicolons terminate statements in JavaScript. Use them at the end of variable declarations, function calls, and return statements.',
      examples: ['let x = 5;', 'console.log("Hello");'],
    },
  },
  {
    keywords: ['indent', 'format'],
    response: {
      title: 'Indentation',
      content: 'Use consistent spacing (2 spaces) for each nesting level. Auto-fix standardizes indentation.',
      examples: ['if (x) {\n  console.log(x);\n}'],
    },
  },
  {
    keywords: ['bracket', 'brace', '{', '}'],
    response: {
      title: 'Brackets',
      content: 'Curly braces {} for blocks, square brackets [] for arrays, parentheses () for functions.',
      examples: ['if (x) { }', 'const arr = [1, 2];', 'func()'],
    },
  },
  {
    keywords: ['function'],
    response: {
      title: 'Functions',
      content: 'Functions are reusable code blocks. Declare with function keyword or arrow syntax.',
      examples: ['function add(a, b) {\n  return a + b;\n}', 'const add = (a, b) => a + b;'],
    },
  },
  {
    keywords: ['variable', 'const', 'let'],
    response: {
      title: 'Variables',
      content: 'Use const for constants, let for changing values. Always declare before use.',
      examples: ['const PI = 3.14;', 'let count = 0;'],
    },
  },
  {
    keywords: ['loop', 'for', 'while'],
    response: {
      title: 'Loops',
      content: 'Loops repeat code. Use for loops for counting, while for conditions.',
      examples: ['for (let i = 0; i < 5; i++) {\n  console.log(i);\n}'],
    },
  },
  {
    keywords: ['if', 'else', 'condition'],
    response: {
      title: 'Conditionals',
      content: 'If/else statements execute code based on conditions.',
      examples: ['if (x > 0) {\n  console.log("positive");\n} else {\n  console.log("negative");\n}'],
    },
  },
  {
    keywords: ['array'],
    response: {
      title: 'Arrays',
      content: 'Arrays store multiple values. Access by index, use methods like push, map, filter.',
      examples: ['const arr = [1, 2, 3];', 'arr.push(4);'],
    },
  },
  {
    keywords: ['object'],
    response: {
      title: 'Objects',
      content: 'Objects store key-value pairs. Access with dot or bracket notation.',
      examples: ['const obj = { name: "John", age: 30 };', 'console.log(obj.name);'],
    },
  },
  {
    keywords: ['string'],
    response: {
      title: 'Strings',
      content: 'Strings are text. Use quotes or backticks for template literals.',
      examples: ['const str = "Hello";', 'const msg = `Hello ${name}`;'],
    },
  },
  {
    keywords: ['error', 'bug', 'debug'],
    response: {
      title: 'Debugging',
      content: 'Use console.log() to inspect values. Check for typos, missing brackets, or undefined variables.',
      examples: ['console.log("value:", x);'],
    },
  },
  {
    keywords: ['console', 'log', 'print'],
    response: {
      title: 'Console Output',
      content: 'console.log() prints values. Useful for debugging and seeing results.',
      examples: ['console.log("Hello");', 'console.log("x =", x);'],
    },
  },
  {
    keywords: ['return'],
    response: {
      title: 'Return',
      content: 'Return statement ends function execution and returns a value.',
      examples: ['function add(a, b) {\n  return a + b;\n}'],
    },
  },
  {
    keywords: ['comment', '//'],
    response: {
      title: 'Comments',
      content: 'Comments document code. Use // for single line, /* */ for multi-line.',
      examples: ['// Single line', '/* Multi\n   line */'],
    },
  },
  {
    keywords: ['autofix', 'fix'],
    response: {
      title: 'Auto-Fix',
      content: 'Auto-Fix corrects: missing semicolons, indentation, extra spaces, and missing brackets.',
      examples: ['Click "Auto-Fix" to automatically fix your code'],
    },
  },
  {
    keywords: ['run', 'execute'],
    response: {
      title: 'Running Code',
      content: 'Click "Run Code" to execute JavaScript. Output appears in console below.',
      examples: ['Write code, click Run Code, see results'],
    },
  },
];

export const searchHelp = (query: string): HelpResponse => {
  const q = query.toLowerCase().trim();
  for (const topic of helpTopics) {
    if (topic.keywords.some(k => q.includes(k.toLowerCase()))) {
      return topic.response;
    }
  }
  return {
    title: 'Help Topics',
    content: 'Try: semicolons, indentation, brackets, functions, variables, loops, conditionals, arrays, objects, strings, errors, console, return, comments, auto-fix, or running code.',
  };
};
