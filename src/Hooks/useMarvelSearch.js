import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCharactersAPI,
  searchComicByIdAPI,
  searchByNameAPI
} from "../api/marvelApi";
import { useMarvelContext } from "../context/MarvelContext";

const useMarvelSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const { setResults } = useMarvelContext();
  const navigate = useNavigate()

  const handleInputChange = 
    (event) => {
      setInputValue(event.target.value);
    }
    
  const search = async (inputValue) => {
    let result = []
    const marvelUrl = "https://www.marvel.com/comics/issue/"
    if (inputValue.startsWith(marvelUrl)) {
      const slicedUrl = inputValue.replace("https://", "").split('/');
      const id = slicedUrl[3];
      result = await searchComicByIdAPI(id);
      navigate(`comics/${id}`)
    } else {
      result = await searchByNameAPI(inputValue);  
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
    inputValue,
    setInputValue,
    handleInputChange,
    search,
    setRandomCharacter
  };
};

export default useMarvelSearch;
