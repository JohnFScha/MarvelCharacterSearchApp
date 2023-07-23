import { useState, useCallback } from "react";
import {
  getComicByUrl,
  searchComicByName,
  searchCharacterByName,
  fetchRandomCharacter,
} from "../Helpers/marvelApi";
import { useMarvelContext } from "../context/MarvelContext";

const useMarvelSearch = () => {
  const { comicData, characterData, setComicData, setCharacterData } =
    useMarvelContext();
  const [searchType, setSearchType] = useState("character");
  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleInputChange = useCallback(
    (event) => {
      setInputValue(event.target.value);
    },
    [inputValue]
  );
  console.log(inputValue)

  const handleSearch = useCallback(
    async(e) => {
      e.preventDefault();
      let result = null;
        if (characterData === null) {
        await onload();
        result = characterData;
        }
        else if (searchType === "comic") {
        await searchComic();
        result = comicData;
      } else if (searchType === "character") {
        await searchCharacter();
        result = characterData;
      }
      setSearchResult(result);
    },
    [searchResult]
  );

  const searchComic = useCallback(async () => {
    let result = null;
    if (inputValue.startsWith("https://www.marvel.com/comics/issue/")) {
      result = await getComicByUrl(inputValue);
    } else {
      result = await searchComicByName(inputValue);
    }
    setComicData(result);
  }, [comicData]);

  const searchCharacter = useCallback(async () => {
    const result = await searchCharacterByName(inputValue);
    setCharacterData(result);
  }, [characterData]);

  async function onload() {
    const names = [
      "Spider-Man",
      "Iron Man",
      "Captain America",
      "Thor",
      "Hulk",
      "Black Widow",
      "Doctor Strange",
      "Black Panther",
      "Captain Marvel",
      "Wolverine",
      "Storm",
      "Deadpool",
      "Scarlet Witch",
      "Ant-Man",
      "Groot",
      "Daredevil",
      "Hawkeye",
      "Vision",
      "Falcon",
      "Jessica Jones",
      "Luke Cage",
      "Wasp",
      "Iceman",
      "Beast",
      "Jean Grey",
      "Cyclops",
      "Rogue",
      "Gambit",
      "Nightcrawler",
      "Star-Lord",
      "Hank Pym",
      "Wanda Maximoff",
      "Rocket Raccoon",
      "Gamora",
      "Drax the Destroyer",
      "Mantis",
      "Winter Soldier",
      "War Machine",
      "Nick Fury",
      "Maria Hill",
      "She-Hulk",
      "Nova",
      "Moon Knight",
      "Blade",
      "Shang-Chi",
      "Namor the Sub-Mariner",
      "Taskmaster",
      "Miles Morales",
      "Agent Venom",
      "Kate Bishop",
      "Moon Girl",
      "Squirrel Girl",
      "America Chavez",
      "Silk",
      "Kamala Khan",
      "Ghost Rider",
      "Jessica Drew",
      "Hercules",
    ];
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomCharacter = await fetchRandomCharacter(names[randomIndex]);
    setCharacterData(randomCharacter);
    setSearchResult(characterData);
  }

  return {
    searchType,
    setSearchType,
    inputValue,
    setInputValue,
    searchResult,
    handleInputChange,
    handleSearch,
    onload,
  };
};

export default useMarvelSearch;
