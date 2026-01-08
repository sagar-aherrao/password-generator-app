import React from 'react';

export default function ComplexitySelector({ complexity, setComplexity }) {
const radios = [
    { id: 'easy-say', label: 'Easy to Say' },
    { id: 'easy-read', label: 'Easy to Read' },
    { id: 'all', label: 'All Characters' },
  ];
  return (
    <div>
      <h2 className="font-medium mb-2">Complexity</h2>

      <div className="flex flex-col gap-2">
        {radios.map(({ id, label }) => (
          <label key={id} className="inline-flex items-center gap-2">
            <input
              type="radio"
              checked={complexity === id}
              onChange={() => setComplexity(id)}
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
}
