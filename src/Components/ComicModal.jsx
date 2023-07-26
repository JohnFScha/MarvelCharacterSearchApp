import React from "react";
import { Link } from "react-router-dom";
import { ComicModalContainer, ComicCover, StyledImg, ModalName, ModalDescription } from '../styles/componentStyles'

const ComicModal = ({ id, thumbnail, title, description }) => {

  if (
    !description ||
    description === "" ||
    thumbnail.path.includes("not_available")
  ) {
    return null;
  }

  return (
    <ComicModalContainer>
      <ComicCover>
        <Link to={`/comics/${id}`}>
          <StyledImg
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt="title"
          />  
        </Link>
        <ModalName>{title}</ModalName>
      </ComicCover>
      <ModalDescription>{description}</ModalDescription>
    </ComicModalContainer>
  );
};

export default ComicModal;
