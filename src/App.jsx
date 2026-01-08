import React, { useState, useEffect } from "react";
import PasswordDisplay from "./components/PasswordDisplay";
import PasswordOptions from "./components/PasswordOptions";
import generatePassword from "./utils/generatePassword";

export default function App() {
  const [length, setLength] = useState(12);
  const [complexity, setComplexity] = useState("easy-say");
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: false,
    symbols: false,
  });
  const [password, setPassword] = useState("");

  const handleGenerate = () => {
    const newPassword = generatePassword(length, complexity, options);
    setPassword(newPassword);
  };

  useEffect(() => {
    handleGenerate();
  }, []); 

  return (
    <div className="w-max mx-auto p-2 rounded bg-white">
      <div className="w-max mx-auto items-center">
        {/* SECTION 1 — password & copy */}
        <section className="bg-white w-full p-6 rounded shadow">
          <h1 className="text-2xl font-semibold text-center mb-4">
            Password Generator
          </h1>
          <PasswordDisplay password={password} />
        </section>
        <section className="w-full bg-white p-6 rounded shadow space-y-6">
          <PasswordOptions
            length={length}
            setLength={setLength}
            complexity={complexity}
            setComplexity={setComplexity}
            options={options}
            setOptions={setOptions}
          />
          <div className="text-center">
            <button onClick={handleGenerate} className="w-full bg-blue-500 text-white p-2">Generate Password</button>
          </div>
        </section>
      </div>
    </div>
  );
}
