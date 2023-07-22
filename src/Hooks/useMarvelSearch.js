import { useState, useCallback, useEffect } from 'react';
import { getComicByUrl, searchComicByName, searchCharacterByName } from '../Helpers/marvelApi';
import { useMarvelContext } from '../context/MarvelContext';

const useMarvelSearch = () => {
  const { comicData, characterData, setComicData, setCharacterData } = useMarvelContext();
  const [searchType, setSearchType] = useState('character');
  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState([])

  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
    console.log(inputValue)
  }, [inputValue]);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    let result = null;
    if (searchType === 'comic') {
      searchComic()
      result = comicData;
    } else if (searchType === 'character') {
      searchCharacter()
      result = characterData;
    }
    setSearchResult(result);
  }, [inputValue]);

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);
  
  const searchComic = useCallback(async () => {
    let result = null;
    if (inputValue.startsWith('https://www.marvel.com/comics/issue/')) {
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
