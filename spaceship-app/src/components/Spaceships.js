import React, { useState, useEffect } from "react";
import ColourCheckboxes from "./ColourCheckboxes";

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

  useEffect(() => {
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
  }, [queryString]);

  const handleSubmit = (event) => {
    // Stop reloading the page
    event.preventDefault();

    // Reset the spaceships array so existing results are not shown
    setSpaceships([]);

    // Serialize the form data
    const formData = new FormData(event.target);

    // Generate the query string based on the form
    let queryParams = new URLSearchParams(formData).toString();
    setQueryString(`/api/spaceships/filter/?${queryParams}`);
  };

  // Update the form data when a checkbox is checked
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
                <td>{spaceship.has_pulse_laser}</td>
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
