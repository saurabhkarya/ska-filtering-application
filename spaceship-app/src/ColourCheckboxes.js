import React from "react";

const ColourCheckboxes = ({ colours, handleChange }) => {
  return (
    <div>
      {colours.map(([value, label]) => (
        <label key={value}>
          <input
            type="checkbox"
            name="colour"
            value={value}
            onChange={handleChange}
          />
          {label}
        </label>
      ))}
    </div>
  );
};

export default ColourCheckboxes;
