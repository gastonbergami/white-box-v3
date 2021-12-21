import React, { useEffect, useState } from "react";
import Cards from "../components/cards/Cards";
import Filters from "../components/filters/Filters";
import Pagination from "../components/pagination/Pagination";
import Search from "../components/search/Search";
import "./Home.scss";
import { CharacterApi } from "../service/character";
const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [fetchData, upDateFetchData] = useState([]);
  const { info, results } = fetchData;

  useEffect(() => {
    CharacterApi.get(
      `?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
    )
      .then((results) => {
        upDateFetchData(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [gender, pageNumber, search, status, species]);

  return (
    <div className="App">
      <h1 className="text-center mb-4">Characters</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filters
            setSpecies={setSpecies}
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
          />

          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default Home;
