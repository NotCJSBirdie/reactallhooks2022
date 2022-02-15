import React from "react";
import { useState } from "react/cjs/react.development";

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const [input, setInput] = useState("");

  return (
    <div>
      <div className="w-full flex flex-col items-center p-32 bg-blue-900 text-white font-bold text-center">
        <h1>The USESTATE Hook!</h1>

        <div className="bg-indigo-400 text-white p-16 w-1/2">{count}</div>

        <button
          className="bg-white border-2 border-black text-black p-12 font-bold active:bg-violet-800 my-8"
          onClick={increment}
        >
          Increment
        </button>

        <input
          className="text-black"
          placeholder="enter something..."
          onChange={(event) => setInput(event.target.value)}
        />

        <div className="p-12 font-bold text-3xl">{input}</div>
      </div>
    </div>
  );
};

export default UseStateHook;
