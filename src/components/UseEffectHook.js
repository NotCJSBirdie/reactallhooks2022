import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseEffectHook = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => {
        setData(
          response.data.map((item) => (
            <div className="flex flex-col items-center">
              <h1>{item.title}</h1>
              <img src={item.thumbnailUrl} alt="img" />
            </div>
          ))
        );
      });
  }, []);
  return (
    <div className="text-white font-bold flex flex-col items-center p-12 bg-blue-700">
      <h1 className="text-3xl m-8 ">UseEffectHook</h1>

      {data}
    </div>
  );
};

export default UseEffectHook;

// UseEffectHook is a component that is used to demonstrate the use of the useEffect hook. It is used to call a function after the component has rendered.
// It will be called after the component has rendered and after the component has been updated.
