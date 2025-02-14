import React, { useState, useEffect } from "react";
import axios from "axios";

import './events.css';
import Event from './Event';
import Image from './images/event-img.png';

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const getEvents = async () => {
          try {
            const response = await axios.get("http://127.0.0.1:8000/api/events/");
            console.log("API Response:", response.data); 
            const updatedEvents = response.data.map((event) => ({
              ...event,
              image: event.image.startsWith("/media/")
                ? `http://127.0.0.1:8000${event.image}`
                : `http://127.0.0.1:8000/media/${event.image}`, 
            }));
            setEvents(updatedEvents);
            console.log("Updated Events:", updatedEvents);
          } catch (error) {
            console.error("Error fetching events:", error);
          }
        };
        getEvents();
      }, []);
    
    return (
        <div id="Events" className="Events">
            <div className="title">Events</div>
            <div className="subtitle">Connect & Create</div>
            <div className="content flex">
                <div className="events flex">
                    {events.map((e, index) => (
                        <Event
                            key={index}
                            image={e.image}
                            name={e.name}
                            date={e.date}
                            location={e.location}
                            description={e.description}
                        />
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default Events;