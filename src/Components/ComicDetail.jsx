import React, {useState, useEffect} from "react";
import parseDate from "../utils/parseDate";
import { useParams } from "react-router-dom";
import { searchComicByIdAPI } from "../Helpers/marvelApi";
import { ComicMain, ComicData, ComicDetailCover } from "../styles/componentStyles";

const ComicDetail = () => {
  const [comic, setComic] = useState(null);
  const id = useParams();
  console.log(comic);

  const comicData = async () => {
    const result = await searchComicByIdAPI(id.comic);
    setComic(result[0]);
  };

  useEffect(() => {
    comicData();
  }, []);

  return comic ? (
    <ComicMain>
      
        <ComicDetailCover src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
      
      <ComicData>
        <h1>{comic.title}</h1>
        <p>{parseDate(comic.dates[0].date)}</p>
        <ul>
          {comic.creators.items.map((creator) => 
            <li key={creator.resourceURI}>{creator.role.charAt(0).toUpperCase() + creator.role.slice(1)}: {creator.name}</li>
          )}
        </ul>
        <p>{comic.description}</p>
      </ComicData>
    </ComicMain>
  ) : (
    <h1>No data</h1>
  );
};

export default ComicDetail;
