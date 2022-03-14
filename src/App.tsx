import React, { useState } from "react";

function App() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);

  const clickA = () => {
    setA(!a);
  };
  const clickB = () => {
    setB(!b);
  };
  const clickC = () => {
    setC(!c);
  };
  debugger;
  const isBDisabled = () => {
    if (a && !b && !c) {
      return true;
    }
    if (a && c && b) {
      return false;
    }

    if (a && !c) {
      return false;
    }

    return false;
  };

  const isCDisabled = () => {
    if (a && !b && !c) {
      return true;
    }
    if (a && c && b) {
      return false;
    }

    return false;
  };

  const isADisabled = () => {
    if (a && c && b) {
      return false;
    }
    if (c && b) {
      return true;
    }

    return false;
  };
  return (
    <div className="flex flex-col bg-sky-100 w-1/6 my-40 mx-auto border-2 border-sky-200 rounded-md">
      <>
        <label className="text-sky-700 p-2 ml-4">
          <input
            data-testid="checkbox-1"
            type="checkbox"
            disabled={isADisabled()}
            checked={a}
            onChange={() => clickA()}
          />
          <span className="ml-3">A</span>
        </label>
      </>

      <>
        <label className="text-sky-700 p-2 ml-4">
          <input
            data-testid="checkbox-2"
            type="checkbox"
            disabled={isBDisabled()}
            checked={b}
            onChange={() => clickB()}
          />
          <span className="ml-3">B</span>
        </label>
        <label className="text-sky-700 p-2 ml-4">
          <input
            data-testid="checkbox-3"
            type="checkbox"
            disabled={isCDisabled()}
            checked={c}
            onChange={() => clickC()}
          />
          <span className="ml-3">C</span>
        </label>
      </>
    </div>
  );
}

export default App;
