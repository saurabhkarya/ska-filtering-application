import React, { useState } from "react";

const ManufactureDateInput = ({
  date,
  handleDateRadioChange,
  handleManufactureDateChange,
}) => {
  const [selectedDateOption, setSelectedDateOption] = useState("");

  return (
    <div className="FormSection">
      <h2>Enter a manufacture date</h2>
      <section className="CheckboxSection">
        <label>
          <input
            type="radio"
            name="before"
            value="before"
            checked={selectedDateOption === "before"}
            onChange={(e) => {
              setSelectedDateOption(e.target.value);
              handleDateRadioChange(e, "before");
            }}
          />
          Before
        </label>
        <label>
          <input
            type="radio"
            name="exact_date"
            value="exact_date"
            checked={selectedDateOption === "exact_date"}
            onChange={(e) => {
              setSelectedDateOption(e.target.value);
              handleDateRadioChange(e, "exact_date");
            }}
          />
          Exactly
        </label>
        <label>
          <input
            type="radio"
            name="after"
            value="after"
            checked={selectedDateOption === "after"}
            onChange={(e) => {
              setSelectedDateOption(e.target.value);
              handleDateRadioChange(e, "after");
            }}
          />
          After
        </label>
      </section>
      <input
        className="InputBox"
        type="date"
        date={date}
        onChange={handleManufactureDateChange}
      />
    </div>
  );
};

export default ManufactureDateInput;
