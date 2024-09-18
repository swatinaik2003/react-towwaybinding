import React, { useState } from "react";
import "./App.css";
const NameAndAgeCalculator = () => {
  const [name, setName] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [age, setAge] = useState(null);

  // Handle name change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Handle year of birth change and calculate age
  const handleYearOfBirthChange = (e) => {
    const year = e.target.value;
    setYearOfBirth(year);

    // Calculate age in years
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - year;

    setAge(calculatedAge);
  };

  return (
    <div>
      <h1>Enter Your Name and Year of Birth</h1>

      {/* Name input with name displayed before the input */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          style={{ marginLeft: "10px", marginRight: "20px" }}
        />
        {/* Display name next to the input */}
        {name && <span style={{ marginLeft: "10px" }}>Your name is: {name}</span>}
      </div>

      {/* Year of birth input with age displayed before the input */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <label>Year of Birth: </label>
        <input
          type="number"
          value={yearOfBirth}
          onChange={handleYearOfBirthChange}
          placeholder="Enter your birth year ( e.g,1990)"
          style={{ marginLeft: "10px", marginRight: "20px" }}
        />
        {/* Display age next to the input */}
        {age !== null && (
          <span style={{ marginLeft: "10px" }}>Your age is: {age} years</span>
        )}
      </div>
    </div>
  );
};

export default NameAndAgeCalculator;
