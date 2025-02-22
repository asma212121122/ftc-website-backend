import React, { useState, useEffect } from "react";
import axios from "axios";

import "./events.css";
import Event from "./Event";

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEvents = async () => {
            try {
                const response = await axios.get("https://ftc-website-backend-production.up.railway.app/api/events/");
                console.log("API Response:", response.data);

                const updatedEvents = response.data.map((event) => {
                    const imageUrl = event.image.startsWith("/media/")
                        ? `https://ftc-website-backend-production.up.railway.app${event.image}`
                        : `https://ftc-website-backend-production.up.railway.app/media/${event.image}`;

                    console.log("Image URL:", imageUrl); // Debug image URL
                    return {
                        ...event,
                        image: imageUrl,
                    };
                });

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