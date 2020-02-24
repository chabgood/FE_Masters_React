import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropDown from "./useDropDown";

const SearchParams = () => {
  const [location, setlocation] = useState("Austin, TX");
  const [breeds, setbreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropDown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, updateBreed] = useDropDown("Breed", "", breeds);

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
