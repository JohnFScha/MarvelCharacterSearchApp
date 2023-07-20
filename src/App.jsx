import { useState } from 'react';
import Header from './Components/Header'

const PUBLIC_KEY = '0a13d695b4d59a3324ab3e0c62ef0a7e'

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [characterData, setCharacterData] = useState([]);
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  // Fetch character data from Marvel API based on character name
  const fetchCharacterData = async (characterName) => {
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${characterName}&apikey=${PUBLIC_KEY}`
    );
    const data = await response.json();
    // Assuming that the API returns an array of characters, you can update characterData with the response
    setCharacterData(data?.results);
    console.log(characterData)
  };

  // Handle character search
  const handleCharacterSearch = () => {
    fetchCharacterData(searchValue);
  };

  // Handle adding a character to favorites
  const handleAddToFavorites = (character) => {
    setFavoriteCharacters([...favoriteCharacters, character]);
  };


  return (
    <>
      <Header
        searchValue={searchValue}
        onSearch={handleCharacterSearch}
        onSearchInputChange={(e) => setSearchValue(e.target.value)}
        onFavoritesClick={() => {/* Handle navigation to favorites page */}}
      />
    </>
  )
}

export default App
