import React from "react";
export default function Pet({ name, breed, animal }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h1", {}, breed),
    React.createElement("h1", {}, animal)
  ]);
}
