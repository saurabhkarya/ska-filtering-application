import React, { useState } from "react";

const PulseLaserInput = ({ handlePulseRadioChange }) => {
  const [selectedPulseOption, setSelectedPulseOption] = useState("");

  return (
    <div className="FormSection">
      <h2>Do you need a pulse laser?</h2>
      <section className="CheckboxSection">
        <label>
          Yes
          <input
            type="radio"
            name="yes"
            value="yes"
            checked={selectedPulseOption === "yes"}
            onChange={(e) => {
              setSelectedPulseOption(e.target.value);
              handlePulseRadioChange(e, "yes");
            }}
          />
        </label>
        <label>
          No
          <input
            type="radio"
            name="no"
            value="no"
            checked={selectedPulseOption === "no"}
            onChange={(e) => {
              setSelectedPulseOption(e.target.value);
              handlePulseRadioChange(e, "no");
            }}
          />
        </label>
      </section>
    </div>
  );
};

export default PulseLaserInput;
