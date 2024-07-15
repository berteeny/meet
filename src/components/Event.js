import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li>
      <h2>{event.summary}</h2>
      <p>{event.created}</p>
      <p>{event.location}</p>
      {showDetails ? 
      <p className="details">{event.description}</p> : null}
      
      <button
        onClick={() => showDetails ? setShowDetails(false) : setShowDetails(true)}
      >
        {showDetails ? "Hide details" : "Show details"}
      </button>
    </li>
  );
};

export default Event;
