
import React from 'react';
import CodeBlock from '@/components/CodeBlock';

export const parseMarkdownWithCodeBlocks = (content: string): React.ReactNode => {
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(content)) !== null) {
    // Add text before code block
    if (match.index > lastIndex) {
      const textBefore = content.slice(lastIndex, match.index);
      if (textBefore.trim()) {
        parts.push(
          <div 
            key={`text-${lastIndex}`}
            dangerouslySetInnerHTML={{ 
              __html: textBefore.replace(/\n/g, '<br>') 
            }} 
          />
        );
      }
    }

    // Add code block
    const language = match[1] || 'text';
    const code = match[2].trim();
    parts.push(
      React.createElement(CodeBlock, {
        key: `code-${match.index}`,
        code,
        language
      })
    );

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < content.length) {
    const remainingText = content.slice(lastIndex);
    if (remainingText.trim()) {
      parts.push(
        <div 
          key={`text-${lastIndex}`}
          dangerouslySetInnerHTML={{ 
            __html: remainingText.replace(/\n/g, '<br>') 
          }} 
        />
      );
    }
  }

  return parts;
};
