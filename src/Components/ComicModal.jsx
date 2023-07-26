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
    <div className="m-auto flex justify-normal items-start w-10/12 gap-3 my-10">
      <div className="flex flex-col">
        <Link to={`/comics/${id}`}>
          <img
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt="title"
            className="max-w-xs"
          />  
        </Link>
        <small className="text-center">{title}</small>
      </div>
      <p className="text-justify">{description}</p>
    </div>
  );
};

export default ComicModal;
