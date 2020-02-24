import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropDown from "./useDropDown";

const SearchParams = () => {
  const [location, setlocation] = useState("Austin, TX");
  const [breeds, setbreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropDown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setbreed] = useDropDown("Breed", "", breeds);

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
      <form>
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
    </div>
  );
};

export default SearchParams;
