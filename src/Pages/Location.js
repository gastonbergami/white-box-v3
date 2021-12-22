import React, { useState, useEffect } from 'react';
import Cards from '../components/cards/Cards';
import InputGroup from '../components/filters/category/InputGroup';

const Location = function () {
  const [id, setID] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);

  const { name, type, dimension } = info;

  const apiLocation = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(apiLocation).then((res) => res.json());
      setInfo(data);
      const epiMa = await Promise.all(
        data.residents.map((url) => fetch(url).then((res) => res.json()))
      );
      setResults(epiMa);
    })();
  }, [apiLocation]);
  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-4">
          Location : <span className="text-primary"> {name === '' ? 'Unknown' : name}</span>
        </h1>
        <h5 className="text-center">
          Dimension :{' '}
          <span className="text-primary">{dimension === '' ? 'Unknown' : dimension}</span>
        </h5>

        <h6 className="text-center">
          Type: <span className="text-primary">{type === '' ? 'Unknown' : type}</span>
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup setID={setID} name="Location" total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row ">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
