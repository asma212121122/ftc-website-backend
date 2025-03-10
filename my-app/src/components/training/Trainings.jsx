import React, { useState, useEffect } from 'react';
import axios from "axios";  // ✅ Import axios
import './training.css';

const Trainings = () => {
    const [workshops, setWorkshops] = useState([]);

    useEffect(() => {
        const getWorkshops = async () => {
            try {
                const response = await axios.get("https://ftc-website-backend-production.up.railway.app/api/workshops/");
                console.log("API Response:", response.data);

                const updatedWorkshops = response.data.map((workshop) => ({
                    ...workshop,
                    image: workshop.image.startsWith("/media/")
                        ? `https://ftc-website-backend-production.up.railway.app${workshop.image}`
                        : `https://ftc-website-backend-production.up.railway.app/media/${workshop.image}`,
                }));

                setWorkshops(updatedWorkshops);
                console.log("Updated Workshops:", updatedWorkshops);
            } catch (error) {
                console.error("Error fetching workshops:", error);
            }
        };

        getWorkshops();
    }, []);

    const displayedItems = [
        ...workshops,
        ...Array(3 - workshops.length).fill(null),
    ].slice(0, 3);

    console.log('Displayed Items:', displayedItems); // Debugging output

    return (
        <div id="Trainings" className="Trainings">
            <div className="title">Training & Workshops</div>
            <div className="subtitle">Empower Your Skills</div>
            <div className="trainings flex">
                {displayedItems.map((item, index) => (
                    <div key={index} className="training">
                        {item ? (
                            <img src={item.image} alt={`Training ${index + 1}`} />
                        ) : (
                            <p>...</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trainings;
