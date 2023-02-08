import React, { useState, useEffect } from "react";
import ColourCheckboxes from "./ColourCheckboxes";

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

  useEffect(() => {
    fetch("/get-spaceships/")
      .then((response) => response.json())
      .then((data) => {
        setSpaceships(data.spaceships);
      });
  }, []);

  const handleSubmit = (event) => {
    // stops reloading the page
    event.preventDefault();
    // serialize the form data
    const formData = new FormData(event.target);
    // send the request to the Django backend
    fetch("http://127.0.0.1:8000/api/spaceships/filter/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setSpaceships(data.spaceships);
      })
      .catch((error) => {
        console.error("Error filtering spaceships:", error);
      });
  };

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: checked ? value : undefined,
    });
  };

  return (
    <div>
      <h1>Spaceships</h1>
      <form onSubmit={handleSubmit}>
        <ColourCheckboxes colours={COLOURS} handleChange={handleChange} />
        <input type="submit" value="Filter" />
      </form>
      <table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Maximum Speed</th>
            <th>Date of Manufacture</th>
            <th>Has Pulse Laser</th>
          </tr>
        </thead>
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
      </table>
    </div>
  );
};

export default Spaceships;
