import React from "react";

const Pet = ({ name, breed, animal }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h1", {}, breed),
    React.createElement("h1", {}, animal)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel"
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mix"
    })
  ]);
};

export default App;
