'use client';

import { useState } from 'react';
import { searchHelp, HelpResponse } from '@/lib/helpSystem';

interface HelpPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelpPanel({ isOpen, onClose }: HelpPanelProps) {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<HelpResponse | null>(null);

  const handleSearch = () => {
    if (query.trim()) setResponse(searchHelp(query));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Help</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
        </div>

        <div className="p-4 border-b flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Ask a question (e.g., 'How do I use functions?')"
            className="flex-1 px-4 py-2 border rounded-lg text-gray-800"
          />
          <button onClick={handleSearch} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Search
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {response ? (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">{response.title}</h3>
              <p className="text-gray-700">{response.content}</p>
              {response.examples?.map((ex, i) => (
                <pre key={i} className="bg-gray-100 p-3 rounded text-sm text-gray-800">
                  <code>{ex}</code>
                </pre>
              ))}
            </div>
          ) : (
            <div className="text-gray-500 text-center py-8">
              Ask about: semicolons, functions, variables, loops, arrays, objects, errors, auto-fix, or running code
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
