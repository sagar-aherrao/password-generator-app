import React from 'react';
import LengthSelector from './LengthSelector';
import ComplexitySelector from './ComplexitySelector';
import CharacterCheckboxes from './CharacterCheckboxes';

export default function PasswordOptions({
  length,
  setLength,
  complexity,
  setComplexity,
  options,
  setOptions,
}) {
  return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <LengthSelector length={length} setLength={setLength} />
      <ComplexitySelector complexity={complexity} setComplexity={setComplexity} />
      <CharacterCheckboxes complexity={complexity} options={options} setOptions={setOptions} />
    </div>
  );
}
