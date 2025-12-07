'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { autoFixCode } from '@/lib/autoFix';
import { executeCode } from '@/lib/codeExecutor';
import HelpPanel from './HelpPanel';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

const DEFAULT_CODE = `console.log("Hello, World!");

function add(a, b) {
  return a + b;
}

const result = add(5, 3);
console.log("Result:", result);
`;

export default function CodeEditor() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState<string[]>([]);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const handleRunCode = () => {
    const result = executeCode(code);
    setOutput(result.error ? [...result.output, `Error: ${result.error}`] : result.output);
  };

  const handleAutoFix = () => {
    setCode(autoFixCode(code));
    setOutput(['Code auto-fixed!']);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <header className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">Code Editor</h1>
        <div className="flex gap-2">
          <button onClick={handleAutoFix} className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
            Auto-Fix
          </button>
          <button onClick={handleRunCode} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Run Code
          </button>
          <button onClick={() => setIsHelpOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Help
          </button>
        </div>
      </header>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            value={code}
            onChange={(value) => setCode(value || '')}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              automaticLayout: true,
            }}
          />
        </div>

        <div className="h-48 bg-gray-950 border-t border-gray-700 flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-700">
            <span className="text-sm text-gray-300">Console</span>
            <button onClick={() => setOutput([])} className="px-3 py-1 bg-gray-700 text-white text-xs rounded">
              Clear
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 font-mono text-sm">
            {output.length === 0 ? (
              <div className="text-gray-500">Output will appear here...</div>
            ) : (
              output.map((line, i) => (
                <div key={i} className={line.includes('Error') ? 'text-red-400' : 'text-gray-300'}>
                  {line}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <HelpPanel isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </div>
  );
}
