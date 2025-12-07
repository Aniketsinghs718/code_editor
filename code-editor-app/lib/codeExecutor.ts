export interface ExecutionResult {
  output: string[];
  error: string | null;
}

export const executeCode = (code: string): ExecutionResult => {
  const output: string[] = [];
  let error: string | null = null;
  
  const customConsole = {
    log: (...args: any[]) => output.push(args.map(formatValue).join(' ')),
    error: (...args: any[]) => output.push('ERROR: ' + args.map(formatValue).join(' ')),
    warn: (...args: any[]) => output.push('WARN: ' + args.map(formatValue).join(' ')),
    info: (...args: any[]) => output.push('INFO: ' + args.map(formatValue).join(' ')),
  };
  
  try {
    new Function('console', code)(customConsole);
    if (output.length === 0) output.push('Code executed (no output)');
  } catch (err) {
    error = err instanceof Error ? err.message : String(err);
  }
  
  return { output, error };
};

const formatValue = (value: any): string => {
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return '[Object]';
  }
};
