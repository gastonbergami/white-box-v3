import React from 'react';
import './FilterBtn.scss';

// eslint-disable-next-line react/prop-types
const FilterBtn = function ({ name, index, items, task, setPageNumber }) {
  return (
    <div>
      <div className="form-check ">
        <input
          className="form-check-input check d-none  x"
          type="radio"
          name={name}
          id={`${name}-${index} `}
        />
        <label
          onClick={() => {
            setPageNumber(1);
            task(items);
          }}
          className="btn btn-outline-primary form-check-label "
          por={`${name}-${index}`}
        >
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;
