import React, { useEffect } from "react";
import parseDate from "../utils/parseDate";
import { TailSpin } from 'react-loader-spinner'
import { useParams } from "react-router-dom";
import { ComicMain, ComicData, ComicDetailCover, SpinnerContainer} from "../styles/componentStyles";
import { useMarvelContext } from "../context/MarvelContext";

const ComicDetail = () => {
  const { comic, comicData } = useMarvelContext();
  const id = useParams();

  useEffect(() => {
    comicData(id);
  }, []);
  
  if(!comic) {
    return (
      <SpinnerContainer>
        <TailSpin color="red" wrapperClass="wrapper" />
      </SpinnerContainer>
    )
  }

  return (
    <ComicMain>
      <ComicDetailCover src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
      <ComicData>
        <h2>{comic.title}</h2>
        <p>{parseDate(comic.dates[0].date)}</p>
        <ul>
          {comic.creators.items.map((creator) => 
            <li key={creator.resourceURI}>{creator.role.charAt(0).toUpperCase() + creator.role.slice(1)}: {creator.name}</li>
          )}
        </ul>
        <p>{comic.description}</p>
      </ComicData>
    </ComicMain>
  )
};

export default ComicDetail;
