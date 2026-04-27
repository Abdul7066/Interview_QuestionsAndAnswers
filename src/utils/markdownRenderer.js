import React from 'react';

/**
 * Simple markdown-to-React renderer.
 * Handles: **bold**, `code`, \n newlines, - bullet lists
 */
export const renderMarkdown = (text) => {
  if (!text) return null;

  const lines = text.split('\n');
  const elements = [];
  let currentList = [];
  let key = 0;

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${key++}`} className="list-disc pl-5 space-y-1 my-2">
          {currentList.map((item, i) => (
            <li key={i} className="text-gray-300">{parseInline(item)}</li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  const parseInline = (line) => {
    // Handle **bold** and `code`
    const parts = [];
    const regex = /(\*\*(.+?)\*\*|`(.+?)`)/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        parts.push(line.substring(lastIndex, match.index));
      }
      if (match[2]) {
        parts.push(<strong key={`b-${match.index}`} className="text-cyan-400 font-semibold">{match[2]}</strong>);
      } else if (match[3]) {
        parts.push(<code key={`c-${match.index}`} className="bg-dark-600 text-purple-400 px-1.5 py-0.5 rounded text-sm font-mono">{match[3]}</code>);
      }
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < line.length) {
      parts.push(line.substring(lastIndex));
    }
    return parts.length > 0 ? parts : line;
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (trimmed === '') {
      flushList();
      return;
    }

    if (trimmed.startsWith('- ')) {
      currentList.push(trimmed.substring(2));
      return;
    }

    if (trimmed.match(/^\d+\.\s/)) {
      flushList();
      elements.push(
        <p key={`ol-${key++}`} className="text-gray-300 my-1">{parseInline(trimmed)}</p>
      );
      return;
    }

    flushList();
    elements.push(
      <p key={`p-${key++}`} className="text-gray-300 my-1">{parseInline(trimmed)}</p>
    );
  });

  flushList();
  return <div className="answer-content space-y-1">{elements}</div>;
};
