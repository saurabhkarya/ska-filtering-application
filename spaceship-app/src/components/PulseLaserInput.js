import React, { useState } from "react";

const PulseLaserInput = ({ handlePulseRadioChange }) => {
  const [selectedPulseOption, setSelectedPulseOption] = useState("");

  return (
    <div>
      <h2>Pulse Laser</h2>
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
    </div>
  );
};

export default PulseLaserInput;
