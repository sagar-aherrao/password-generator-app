import React from 'react';

export default function LengthSelector({ length, setLength }) {
  return (
    <div>
      <h2 className="font-medium mb-2">Length</h2>

      <div className="flex items-center gap-2">
        {/* range slider */}
        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="flex-grow accent-indigo-600"
        />

        {/* numeric input */}
        <input
          type="number"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-16 px-2 py-1 border rounded"
        />
      </div>
    </div>
  );
}
