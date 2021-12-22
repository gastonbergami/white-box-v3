import React, { useState, useEffect } from 'react';
import Cards from '../components/cards/Cards';
import InputGroup from '../components/filters/category/InputGroup';

const Episodes = function () {
  const [id, setID] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);

  const { airDate, name } = info;

  const apiEpisode = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(apiEpisode).then((res) => res.json());
      setInfo(data);
      const epiMa = await Promise.all(
        data.characters.map((url) => {
          return fetch(url).then((res) => res.json());
        })
      );
      setResults(epiMa);
    })();
  }, [apiEpisode]);
  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-4">
          Episode : <span className="text-primary"> {name === '' ? 'Unknown' : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date <span className="text-primary">{airDate === '' ? 'Unknown' : airDate}</span>
        </h5>
      </div>
      <div className="row ">
        <div className="col-lg-3 col-12 mb-4 ">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup setID={setID} name="Episode" total={51} />
        </div>
        <div className="col-lg-8 col-12 ">
          <div className="row  ">
            <Cards page="/episodes/ " results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
