import React, { useState } from "react";

const ManufactureDateInput = ({
  date,
  handleDateRadioChange,
  handleManufactureDateChange,
}) => {
  const [selectedDateOption, setSelectedDateOption] = useState("");

  return (
    <div>
      <h2>Manufacture Date</h2>
      <input type="date" date={date} onChange={handleManufactureDateChange} />
      <label>
        Before
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
      </label>
      <label>
        After
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
      </label>
      <label>
        On Exact Date
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
      </label>
    </div>
  );
};

export default ManufactureDateInput;
