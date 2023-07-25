import React from 'react'

const ComicModal = ({ thumbnail, title, description }) => {
  
  if(!description || description === "") {
    return null
  }
  
  return (
    <div className="mb-2">
      <h1>{title}</h1>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default ComicModal;