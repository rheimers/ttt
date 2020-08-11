import "./square.css";
import React from "react";

export default function Square(props) {
  // wir legen Zustand an, und eine Funktion (setValue)
  //um zu aktualisieren, damit sich die Komponente -->
  // const [state, setState] = React.useState(initialValue);
  const [value, setValue] = React.useState(null);
  // equals
  // const state = React.useState(null);
  // const value = state [0];
  // const setValue = state[1];
  return (
    <button
      className="square"
      onClick={() => {
        setValue("X");
      }}
    >
      {value}
    </button>
  );
}
