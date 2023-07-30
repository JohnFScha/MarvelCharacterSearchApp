import React from "react";
import { Link } from "react-router-dom";
import {
  ComicModalContainer,
  ComicCover,
  StyledImg,
  ModalName,
  ModalDescription,
} from "../styles/componentStyles";

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
      <Link to={`/comics/${id}`}>
        <StyledImg
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt="title"
        />
      </Link>
      <ComicCover>
        <ModalName>{title}</ModalName>
        <ModalDescription>{description}</ModalDescription>
      </ComicCover>
    </ComicModalContainer>
  );
};

export default ComicModal;
