import React from "react";
import { ClipboardIcon } from '@heroicons/react/24/outline';
export default function PasswordDisplay({password}){

const handleCopy = () => {
    navigator.clipboard.writeText(password);
}

return (<div className="flex gap-2">
      <input
        type="text"
        readOnly
        value={password}
        className="flex-grow px-3 py-2 rounded border border-gray-300"
      />
      <button
        onClick={handleCopy}
        title="Copy"
        className="p-2 rounded bg-gray-200 hover:bg-gray-300"
      >
        <ClipboardIcon className="h-5 w-5" />
      </button>
    </div>);
}