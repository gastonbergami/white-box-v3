import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CardDetail.scss';

const CardDetail = function () {
  const [fetchData, upDateFetchData] = useState([]);
  const { name, image, location, origin, gender, species, status, type } = fetchData;
  const { id } = useParams();
  const api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      upDateFetchData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <img src={image} alt="" className="img-fluid" />
        {(() => {
          if (status === 'Dead') {
            return <div className=" badge bg-danger fs-5">{status}</div>;
          }
          if (status === 'Alive') {
            return <div className=" badge bg-success fs-5">{status}</div>;
          }
          return <div className="  badge bg-secondary fs-5">{status}</div>;
        })()}
        <div className="content">
          <div>
            <span className="fw-bold">Gender:</span>
            {gender}
          </div>
          <div>
            <span className="fw-bold">Species:</span>
            {species}
          </div>
          <div>
            <span className="fw-bold">Type:</span>
            {type === '' ? 'Unknown ' : type}
          </div>
          <div>
            <span className="fw-bold">Location:</span>
            {location?.name}
          </div>
          <div>
            <span className="fw-bold">Origin:</span>
            {origin?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
