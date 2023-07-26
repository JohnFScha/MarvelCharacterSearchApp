import React from "react";
import { Link } from "react-router-dom";

const ComicModal = ({ id, thumbnail, title, description }) => {
  if (
    !description ||
    description === "" ||
    thumbnail.path.includes("not_available")
  ) {
    return null;
  }

  return (
    <div className="m-auto flex justify-normal items-start w-6/6 gap-3">
      <div className="flex flex-col">
        <Link to={`/comics/${id}`}>
          <img
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt="title"
            className="max-w-md"
          />  
        </Link>
        <h1>{title}</h1>
      </div>
      <p className="text-justify">{description}</p>
    </div>
  );
};

export default ComicModal;
