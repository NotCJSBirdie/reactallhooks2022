import React from "react";
import { useReducer } from "react/cjs/react.development";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };

    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: false });

  return (
    <div className="flex flex-col items-center bg-blue-400">
      <h1 className="text-white font-bold text-4xl p-6"> USEREDUCER HOOK</h1>

      <h1 className="m-8 p-8 bg-white text-black font-bold text-4xl text-center">
        {state.count}
      </h1>

      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
        className="text-black bg-white p-8 text-center border-black border-2 m-2"
      >
        Increment!
      </button>

      <h1 className="m-8 p-8 bg-white text-black font-bold text-4xl text-center">
        {state.showText && <h1>This is the showText State!!!</h1>}
      </h1>
    </div>
  );
};

export default UseReducerHook;

// useReducerHook is used to call complex states at the same time. You can call multiple states at the same time.
