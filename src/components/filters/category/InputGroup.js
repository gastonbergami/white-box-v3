import React from "react";

const InputGroup = ({ total, name, setID }) => {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => setID(e.target.value)}
        className="form-select"
        id={name}
      >
        <option value="1">Choose...</option>
        {[...Array(total).keys()].map((idEpi) => {
          return (
            <option value={idEpi + 1}>
              {name} - {idEpi + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
