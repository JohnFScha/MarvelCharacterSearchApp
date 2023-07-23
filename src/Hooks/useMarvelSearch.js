import { useState, useCallback, useEffect } from "react";
import { getComicByUrl, searchComicByName, searchCharacterByName, fetchRandomCharacter } from "../Helpers/marvelApi";
import { useMarvelContext } from "../context/MarvelContext";

const useMarvelSearch = () => {
  const { comicData, characterData, setComicData, setCharacterData } =
    useMarvelContext();
  const [searchType, setSearchType] = useState("character");
  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleInputChange = useCallback((event) => {
      setInputValue(event.target.value );
    }, [inputValue]
    );

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      let result = null;
      if (searchType === "comic") {
        searchComic();
        result = comicData;
      } else if (searchType === "character") {
        searchCharacter();
        result = characterData;
      }
      setSearchResult(result);
    },
    [characterData, comicData, inputValue]
  );

  const searchComic = useCallback(async () => {
    let result = null;
    if (inputValue.startsWith("https://www.marvel.com/comics/issue/")) {
      result = await getComicByUrl(inputValue);
    } else {
      result = await searchComicByName(inputValue);
    }
    setComicData(result);
  }, [inputValue, setComicData]);

  const searchCharacter = useCallback(async () => {
    const result = await searchCharacterByName(inputValue);
    setCharacterData(result);
  }, [inputValue, setCharacterData]);

  useEffect(() => {
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
    ];

    const randomIndex = Math.floor(Math.random() * names.length);
    async function onload () {
      const randomCharacter = await fetchRandomCharacter(names[randomIndex]);
      setCharacterData(randomCharacter)
      setSearchResult(characterData)
    }
    onload()
  }, []);

  return {
    searchType,
    setSearchType,
    inputValue,
    setInputValue,
    searchResult,
    handleInputChange,
    handleSearch,
  };
};

export default useMarvelSearch;
