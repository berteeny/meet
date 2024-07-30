import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [eventNumber, setEventNumber] = useState("32");

  const handleChange = (event) => {
    const value = event.target.value;

    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "Please enter a positive number";
    } else {
      errorText = "";
      setCurrentNOE(value);
    }
    setEventNumber(value);
    setErrorAlert(errorText);
  };

  return (
    <div id="number-of-events">
      <label>Number of Events:</label>
      <input
        type="text"
        className="numberOfEvents"
        value={eventNumber}
        onChange={handleChange}
      />
    </div>
  );
};

export default NumberOfEvents;
