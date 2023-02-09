import React, { useState, useEffect } from "react";
import ColourCheckboxes from "./ColourCheckboxes";
import SpeedInput from "./SpeedInput";
import ManufactureDateInput from "./ManufactureDateInput";
import PulseLaserInput from "./PulseLaserInput";

// List of all potential colours
const COLOURS = [
  ["Red", "Red"],
  ["Orange", "Orange"],
  ["Yellow", "Yellow"],
  ["Green", "Green"],
  ["Blue", "Blue"],
  ["Indigo", "Indigo"],
  ["Violet", "Violet"],
];

const Spaceships = () => {
  const [formData, setFormData] = useState({});
  const [spaceships, setSpaceships] = useState([]);
  const [queryString, setQueryString] = useState("");
  const [selectedColors, setSelectedColors] = useState({});
  const [selectedSpeedOption, setSelectedSpeedOption] = useState("");
  const [selectedDateOption, setSelectedDateOption] = useState("");
  const [selectedPulseOption, setSelectedPulseOption] = useState("");
  const [speed, setSpeed] = useState(0);
  const [date, setDate] = useState("");
  const [filterClicked, setFilterClicked] = useState(0);

  useEffect(() => {
    console.log(queryString);
    if (queryString) {
      fetch(`http://127.0.0.1:8000${queryString}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            setSpaceships(data);
            console.log(data);
          } else {
            console.log("No spaceship fits the criteria");
          }
        })
        .catch((error) => {
          console.error("Error filtering spaceships:", error);
        });
    }
  }, [queryString, filterClicked]);

  const handleSubmit = (event) => {
    // Stop reloading the page
    event.preventDefault();

    // Reset the spaceships array so existing results are not shown
    setSpaceships([]);

    // Reset the query string to an empty string
    setQueryString("");

    // Generate the query string
    let queryParams = "";
    Object.entries(selectedColors).forEach(([colour, isSelected]) => {
      if (isSelected) {
        queryParams += `colour=${colour}&`;
      }
    });
    if (selectedSpeedOption === "less_than") {
      queryParams += `speed_filter=less_than&max_speed=${speed}`;
    } else if (selectedSpeedOption === "more_than") {
      queryParams += `speed_filter=more_than&max_speed=${speed}`;
    } else if (selectedSpeedOption === "exactly") {
      queryParams += `speed_filter=exactly&max_speed=${speed}`;
    }

    if (selectedDateOption === "before") {
      queryParams += `&date_filter=before&date=${date}`;
    } else if (selectedDateOption === "after") {
      queryParams += `&date_filter=after&date=${date}`;
    } else if (selectedDateOption === "exact_date") {
      queryParams += `&date_filter=exact_date&date=${date}`;
    }

    if (selectedPulseOption === "yes") {
      queryParams += `&pulse=yes`;
    } else if (selectedPulseOption === "no") {
      queryParams += `&pulse=no`;
    }

    setQueryString(`/api/spaceships/filter/?${queryParams}`);
    setFilterClicked(filterClicked + 1);
  };

  const handleSpeedRadioChange = (event) => {
    setSelectedSpeedOption(event.target.value);
  };

  const handleDateRadioChange = (event) => {
    setSelectedDateOption(event.target.value);
  };

  const handlePulseRadioChange = (event) => {
    setSelectedPulseOption(event.target.value);
  };

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);
  };

  const handleManufactureDateChange = (event) => {
    setDate(event.target.value);
  };

  // Update the selectedColors state when a checkbox is checked
  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setSelectedColors((prevSelectedColors) => {
      return {
        ...prevSelectedColors,
        [name]: checked,
      };
    });
  };

  // Update the selectedColors state when select all is checked
  const handleSelectAll = (event) => {
    const { checked } = event.target;
    setSelectedColors(
      COLOURS.reduce(
        (acc, [value, label]) => ({
          ...acc,
          [label]: checked,
        }),
        {}
      )
    );
  };

  return (
    // Render the form and the table of spaceships
    <div>
      <h1>Spaceships</h1>
      <form onSubmit={handleSubmit}>
        <ColourCheckboxes
          colours={COLOURS}
          handleChange={handleChange}
          handleSelectAll={handleSelectAll}
          selectedColors={selectedColors}
        />
        <SpeedInput
          handleSpeedRadioChange={handleSpeedRadioChange}
          speed={speed}
          selectedSpeedOption={selectedSpeedOption}
          handleSpeedChange={handleSpeedChange}
        />
        <ManufactureDateInput
          handleDateRadioChange={handleDateRadioChange}
          date={date}
          selectedDateOption={selectedDateOption}
          handleManufactureDateChange={handleManufactureDateChange}
        />
        <PulseLaserInput
          handlePulseRadioChange={handlePulseRadioChange}
          selectedPulseOption={selectedPulseOption}
        />
        <input type="submit" value="Filter" />
      </form>
      <div>
        <p>Query string: {queryString}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Maximum Speed</th>
            <th>Date of Manufacture</th>
            <th>Has Pulse Laser</th>
          </tr>
        </thead>
        {/* If there is a Spaceship map the columns to the results */}
        {spaceships.length ? (
          <tbody>
            {spaceships.map((spaceship) => (
              <tr key={spaceship.id}>
                <td>{spaceship.colour}</td>
                <td>{spaceship.max_speed}</td>
                <td>{spaceship.date_of_manufacture}</td>
                <td>{spaceship.has_pulse_laser ? <p>Yes</p> : <p>No</p>}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr> </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Spaceships;
