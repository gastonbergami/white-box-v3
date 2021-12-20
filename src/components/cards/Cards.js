import React from "react";
import { Link } from "react-router-dom";
import "./Cards.scss";

const Cards = ({ results, page }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <Link
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark text-decoration-none "
        >
          <div className="card d-flex flex-column justify-content-center  h-100">
            <img className="img-fluid img h-100" src={image} alt="" />
            <div className="content p-2">
              <div className="fs-4 fw-bold mb-7">{name}</div>
              <div className="">
                <div className="fs-6">Las location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div className="position-absolute  badge bg-danger">
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div className="position-absolute  badge bg-success">
                  {status}
                </div>
              );
            } else {
              return (
                <div className="position-absolute  badge bg-secondary">
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No Characters Found :/";
  }
  return <>{display}</>;
};

export default Cards;