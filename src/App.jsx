import { useState } from 'react';
import Header from './Components/Header'

let ts = String(new Date().valueOf())
const PUBLIC_KEY = '0a13d695b4d59a3324ab3e0c62ef0a7e'
const MARVEL_API_KEY = 'f5f7d080a1e9ca32a2b3addb12df0c1736be6d0e'

function App() {
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // Handle adding a character to favorites
  const handleAddToFavorites = (character) => {
    setFavoriteCharacters([...favoriteCharacters, character]);
  };

  return (
    <>
      <Header
        onFavoritesClick={() => {/* Handle navigation to favorites page */}}
      />
    </>
  )
}

export default App
