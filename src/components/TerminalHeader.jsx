import React from 'react';

export default function TerminalHeader({ title }) {
  return (
    <div className="terminal-header">
      <span>{title}</span>
      <div>
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
