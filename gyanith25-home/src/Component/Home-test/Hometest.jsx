import React, { useEffect, useState } from 'react';
import './Hometest.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  // Load events from the JSON file
  useEffect(() => {
    fetch('/Hometest.json') // Adjust path if the JSON is not in the public folder
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="events-container">
      <div className="events-header">
        <h2>Events</h2>
        <button className="all-events-button">All Events</button>
      </div>
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.name} className="event-image" />
            <p className="event-name">{event.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
