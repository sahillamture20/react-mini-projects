import { useState } from "react";

function App() {
  const [color, setColor] = useState("color");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-600 px-5 py-5 rounded-2xl">
            <button
              className="outline-none bg-red-700 text-white shadow-lg px-4 py-4 rounded-full"
              onClick={() => setColor("red")}
            >
            </button>
            <button
              className="outline-none px-4 py-4 bg-blue-700 text-white shadow-lg rounded-full"
              onClick={() => setColor("blue")}
            >
            </button>
            <button
              className="outline-none px-4 py-4 bg-yellow-400 text-white shadow-lg rounded-full"
              onClick={() => setColor("yellow")}
            > 
            </button>
            <button
              className="outline-none px-4 py-4 bg-green-700 text-white shadow-lg rounded-full"
              onClick={() => setColor("green")}
            > 
            </button>
            <button
              className="outline-none px-4 py-4 bg-black text-white shadow-lg rounded-full"
              onClick={() => setColor("black")}
            > 
            </button>
            <button
              className="outline-none px-4 py-4 bg-white shadow-lg rounded-full"
              onClick={() => setColor("white")}
            > 
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
