
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeBlockProps {
  code: string | { [key: string]: string };
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false);
  const [activeOS, setActiveOS] = useState<string>('macos');

  // Handle both string and object code formats
  const isMultiOS = typeof code === 'object';
  const availableOS = isMultiOS ? Object.keys(code) : ['macos'];
  const currentCode = isMultiOS ? code[activeOS] || code[availableOS[0]] : code;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getOSLabel = (os: string) => {
    switch (os) {
      case 'macos':
        return 'macOS';
      case 'windows':
        return 'Windows PowerShell';
      case 'linux':
        return 'Linux';
      default:
        return os;
    }
  };

  return (
    <div className="relative group my-6">
      <div className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        {/* Header with language and OS tabs */}
        <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              {isMultiOS ? (
                availableOS.map((os) => (
                  <button
                    key={os}
                    onClick={() => setActiveOS(os)}
                    className={`px-2 py-1 text-xs rounded transition-colors ${
                      activeOS === os
                        ? 'bg-gray-900 dark:bg-gray-700 text-white'
                        : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    {getOSLabel(os)}
                  </button>
                ))
              ) : (
                <span className="bg-gray-900 dark:bg-gray-700 text-white px-2 py-1 rounded text-xs">
                  macOS
                </span>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            )}
          </Button>
        </div>
        
        {/* Code content */}
        <pre className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 overflow-x-auto text-sm font-mono">
          <code className={`language-${language}`}>
            {currentCode}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
