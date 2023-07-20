import React from 'react'

const CharacterList = ({ characters, onCharacterClick }) => {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>
          <img src={character.image} alt={character.name} onClick={() => onCharacterClick(character)} />
        </li>
      ))}
    </ul>
  )
}

export default CharacterList