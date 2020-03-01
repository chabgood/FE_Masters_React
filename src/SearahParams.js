import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropDown from "./useDropDown";

const SearchParams = () => {
  const [location, setlocation] = useState("Seattle, WA");
  const [breeds, setbreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropDown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setbreed] = useDropDown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });
    setPets(animals || []);
  }
  useEffect(() => {
    setbreed("");
    setbreeds([]);

    pet.breeds(animal).then(({ breeds }) => {
      const breedStr = breeds.map(({ name }) => name);
      setbreeds(breedStr);
    });
  }, [animal, setbreeds, setbreed]);
  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          location
          <input
            id="location"
            onChange={e => setlocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
          <AnimalDropdown />
          <BreedDropdown />
          <button>Submit</button>
        </label>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
