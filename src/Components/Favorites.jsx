import React from "react";
import { CardContainer, StyledButton, StarFillIcon, StyledName, EmptyFavs, CharacterImg, FavoriteSection} from "../styles/componentStyles";
import { useMarvelContext } from "../context/MarvelContext";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useMarvelContext();

  console.log("FAVORITES: ", favorites)
  
  const handleRemoveFromFavorites = (favorite) => {
    removeFromFavorites(favorite)
  }

  if (favorites.length === 0) {
    return <EmptyFavs>Add favorites to be shown here.</EmptyFavs>
  }
   
  return (
    <FavoriteSection>
      { 
      favorites.map((favorite) => (
        <CardContainer key={favorite.id}>
          <StyledButton onClick={() => handleRemoveFromFavorites(favorite.id)}>  
            <StarFillIcon />
          </StyledButton>
          <CharacterImg src={`${favorite.thumbnail.path}/portrait_uncanny.${favorite.thumbnail.extension}`} alt={favorite.name} />
          <StyledName>{favorite.name}</StyledName>
        </CardContainer>
        ))
      }
    </FavoriteSection>
  );
};

export default Favorites;
