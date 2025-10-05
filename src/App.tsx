import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const addNote = () => {};

  return (
    <div className="w-72 p-4 bg-gray-50 rounded-lg shadow-md font-sans">
      <h2 className="text-xl font-bold mb-2 text-gray-800">Simple Notes</h2>

      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none"
          type="text"
          placeholder="Add a note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          onClick={addNote}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default App;
