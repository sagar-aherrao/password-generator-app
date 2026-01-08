import React from "react";
import { useEffect } from "react";

export default function CharacterCheckboxes({
  complexity,
  options,
  setOptions,
}) {
  const toggle = (key) => setOptions({ ...options, [key]: !options[key] });
  useEffect(() => {
    switch (complexity) {
      case "easy-say":
        setOptions({
          uppercase: true,
          lowercase: true,
          numbers: false,
          symbols: false,
        });
        break;

      case "easy-read":
        setOptions((prev) => ({
          ...prev,
          uppercase: true,
          lowercase: true,
          numbers: false,
          symbols: false,
        }));
        break;

      case "all":
        setOptions({
          uppercase: true,
          lowercase: true,
          numbers: true,
          symbols: true,
        });
        break;

      default:
        break;
    }
  }, [complexity, setOptions]);
  const disableNumSym = complexity === "easy-say";
  const boxes = ["uppercase", "lowercase", "numbers", "symbols"];

  return (
    <div>
      <h2 className="font-medium mb-2">Characters</h2>
      <div className="flex flex-col gap-2">
        {boxes.map((key) => (
          <label
            key={key}
            className="inline-flex items-center gap-2 capitalize"
          >
            <input
              type="checkbox"
              checked={options[key]}
              disabled={
                disableNumSym && (key === "numbers" || key === "symbols")
              }
              onChange={() => toggle(key)}
            />
            {key}
          </label>
        ))}
      </div>
    </div>
  );
}
