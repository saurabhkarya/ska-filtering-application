import React, { useState } from "react";

const SpeedInput = ({ speed, handleSpeedRadioChange, handleSpeedChange }) => {
  const [selectedSpeedOption, setSelectedSpeedOption] = useState("");

  return (
    <div>
      <h2>Maximum Speed</h2>
      <input
        type="number"
        speed={speed}
        name="speed"
        onChange={handleSpeedChange}
      />
      <label>
        Less Than
        <input
          type="radio"
          name="less_than"
          value="less_than"
          checked={selectedSpeedOption === "less_than"}
          onChange={(e) => {
            setSelectedSpeedOption(e.target.value);
            handleSpeedRadioChange(e, "less_than");
          }}
        />
      </label>
      <label>
        More Than
        <input
          type="radio"
          name="more_than"
          value="more_than"
          checked={selectedSpeedOption === "more_than"}
          onChange={(e) => {
            setSelectedSpeedOption(e.target.value);
            handleSpeedRadioChange(e, "more_than");
          }}
        />
      </label>
      <label>
        Exactly
        <input
          type="radio"
          name="exactly"
          value="exactly"
          checked={selectedSpeedOption === "exactly"}
          onChange={(e) => {
            setSelectedSpeedOption(e.target.value);
            handleSpeedRadioChange(e, "exactly");
          }}
        />
      </label>
    </div>
  );
};

export default SpeedInput;
