import React from 'react';
import './events.css';

const Event = ({image, name, date, location, description }) => {
    return (
        <div className="event ">
            <div className="event-image flex"><img src={image} alt="event" /></div>
            <p className="name">{name}</p>
            <p className="details">{date} - {location}</p>
            <p className="event-description">{description}</p>
        </div>
    );
};

export default Event;
