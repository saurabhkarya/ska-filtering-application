import React, { useState } from "react";
import "./SpeedInput.css";
import "./FormStyles.css";

const SpeedInput = ({ speed, handleSpeedRadioChange, handleSpeedChange }) => {
  const [selectedSpeedOption, setSelectedSpeedOption] = useState("");

  return (
    <div className="FormSection">
      <section>
        <h2>How fast do you want to go? (km/h)</h2>
        <section className="CheckboxSection">
          <label>
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
            Less Than
          </label>
          <label>
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
            Exactly
          </label>
          <label>
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
            More Than
          </label>
        </section>
        <input
          className="InputBox"
          type="number"
          speed={speed}
          name="speed"
          onChange={handleSpeedChange}
        />
      </section>
    </div>
  );
};

export default SpeedInput;
