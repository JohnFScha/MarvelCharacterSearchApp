import { useState, useCallback } from "react";
import {
  getCharactersAPI,
  searchByIdAPI,
  searchByNameAPI
} from "../Helpers/marvelApi";

const useMarvelSearch = () => {
  const [type, setType] = useState("character");
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = 
    (event) => {
      setInputValue(event.target.value);
    }
    
  const search = async (e) => {
    e.preventDefault()
    let result = null
    const marvelUrl = "https://www.marvel.com/comics/issue/"
    const isURL = inputValue.startsWith(marvelUrl)
    if (type === 'comic' && isURL) {
      const slicedUrl = inputValue.replace("https://", "").split('/');
      const id = slicedUrl[3];
      debugger;
      result = await searchByIdAPI(id, type);
    } else {
      result = await searchByNameAPI(inputValue, type);  
    }
    setResults(result);
  }

  const setRandomCharacter = async () => {
    const characters = await getCharactersAPI();
    const maxLimit = characters.length - 1;
    const index = Math.floor(Math.random() * maxLimit);
    setResults([characters[index]]);
  }
  
  return {
    type,
    setType,
    inputValue,
    setInputValue,
    results,
    handleInputChange,
    search,
    setRandomCharacter
  };
};

export default useMarvelSearch;
