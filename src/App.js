import React from "react";
import { render } from "react-dom";
import Pet from "./Pet.js";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Havanese" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
