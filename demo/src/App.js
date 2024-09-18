import Demo, { useState } from "react"
import "./App.css";

const Demo = () => {
  const[name,setName] = useState("");
  const[age,setAge] = useState("");

  const handleNameChange = (e) => {
  setName(e.target.value);
  };

  const handleAgeChange = (e) => {
  setAge(e.target.value);
};

return (
  <div className="app">
    <h1>User Information Form</h1>
    <div className="form">
      <div className="form-left">
        <div className="label">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="label">
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={handleAgeChange}
            placeholder="Enter your age"
          />
        </div>
      </div>
      <div className="form-right">
        <p>Name: {name || "No name"}</p>
        <p>Age: {age || "No age"}</p>
      </div>
    </div>
  </div>
);
};

export default App;