import { useState } from "react";

const NumberOfEvents = () => {
  const [eventNumber, setEventNumber] = useState("32");

  const handleChange = (event) => {
    const value = event.target.value;
    setEventNumber(value);
  };

  return (
    <div id="number-of-events">
      <label>Number of Events</label>
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
