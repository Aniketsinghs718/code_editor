export interface FixRule {
  name: string;
  apply: (code: string) => string;
}

const addSemicolons = (code: string): string => {
  return code.split('\n').map(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('//') || trimmed.endsWith(';') || 
        trimmed.endsWith('{') || trimmed.endsWith('}') || trimmed.endsWith(',')) {
      return line;
    }
    if (trimmed.startsWith('const') || trimmed.startsWith('let') || 
        trimmed.startsWith('var') || trimmed.startsWith('return')) {
      const indent = line.match(/^\s*/)?.[0] || '';
      return indent + trimmed + ';';
    }
    return line;
  }).join('\n');
};

const fixIndentation = (code: string): string => {
  const lines = code.split('\n');
  let level = 0;
  return lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('}')) level = Math.max(0, level - 1);
    const result = '  '.repeat(level) + trimmed;
    if (trimmed.endsWith('{')) level++;
    return result;
  }).join('\n');
};

const removeExtraSpaces = (code: string): string => {
  return code.split('\n').map(line => {
    const indent = line.match(/^\s*/)?.[0] || '';
    const content = line.trim().replace(/\s+/g, ' ');
    return indent + content;
  }).join('\n');
};

const fixBrackets = (code: string): string => {
  const counts = { '{': 0, '[': 0, '(': 0 };
  const closing = { '{': '}', '[': ']', '(': ')' };
  
  for (const char of code) {
    if (char in counts) counts[char]++;
    else if (char === '}') counts['{']--;
    else if (char === ']') counts['[']--;
    else if (char === ')') counts['(']--;
  }
  
  let result = code;
  for (const [open, count] of Object.entries(counts)) {
    if (count > 0) result += '\n' + closing[open].repeat(count);
  }
  return result;
};

export const fixRules: FixRule[] = [
  { name: 'Remove Extra Spaces', apply: removeExtraSpaces },
  { name: 'Add Semicolons', apply: addSemicolons },
  { name: 'Fix Indentation', apply: fixIndentation },
  { name: 'Fix Brackets', apply: fixBrackets },
];

export const autoFixCode = (code: string): string => {
  let fixed = code;
  fixRules.forEach(rule => {
    try {
      fixed = rule.apply(fixed);
    } catch (err) {
      console.error(`Error in ${rule.name}:`, err);
    }
  });
  return fixed;
};
