import React from "react";
import { useParams } from "react-router-dom";
import { searchComicByIdAPI } from "../Helpers/marvelApi";
import { useState } from "react";
import { useEffect } from "react";

const ComicDetail = () => {
  const [comic, setComic] = useState(null);
  const id = useParams();
  console.log(id);

  const comicData = async () => {
    const result = await searchComicByIdAPI(id.comic);
    setComic(result[0]);
  };

  useEffect(() => {
    comicData();
  }, []);

  console.log(comic);

  return comic ? (
    <main className="grid grid-cols-2 justify-items-center p-5 w-5/6 m-auto">
      <div>
        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} className="max-w-sm" />
      </div>
      <div className="flex flex-col gap-y-5 text-justify text-lg">
        <h1>{comic.title}</h1>
        <p>{comic.dates[0].date}</p>
        <ul>
          {comic.creators.items.map((creator) => {
            <li key={creator.resourceURI}>{creator.role}: {creator.name}</li>
          })}
        </ul>
        <p>{comic.description}</p>
      </div>
    </main>
  ) : (
    <h1>No data</h1>
  );
};

export default ComicDetail;
