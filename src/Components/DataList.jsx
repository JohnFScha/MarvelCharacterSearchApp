import React from 'react';
import DataCard from './DataCard';

const DataList = ({ data, handleOpenModal }) => {
  
  if (!data || data.length === 0) {
    return <h1>No characters found</h1>;
  }

  return (
    <div className="grid grid-cols-4 place-items-center m-5 gap-y-5">
      {
        data.map((data) => (
          <DataCard
            key={data.id}
            id={data.id}
            title={data.title || data.name}
            thumbnail={data.thumbnail}
            handleOpenModal={handleOpenModal}
          />
        ))
      }
    </div>
  );
};

export default DataList;
