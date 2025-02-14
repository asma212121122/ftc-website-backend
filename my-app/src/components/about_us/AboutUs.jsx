import React, { useState } from 'react';
import './about.css';
import image from './images/about-img.png';
import descriptionImage from './images/image3.jpg';

const AboutUs = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div id="AboutUs" className="aboutus">
            <div className="title">ABOUT US</div>
            <div className="subtitle">Our Tech Story</div>
            <div className="content flex">
                <div className="description flex">
                    <div className="description-text">
                        <span className='blue'>The Future Tech Club </span> is the first and only scientific club at
                        the Higher National School of ICT and Post, formerly known as CSI (Scientific Club of INPTIC).
                        It is run by a group of volunteer students under the supervision of the institute's administration.{" "}

                         {!showMore && (
                            <span className='blue clickable' onClick={() => setShowMore(true)}>
                            Learn More
                        </span>
                        )}
                        <span className={`rest ${showMore ? 'visible' : ''}`}>
                            Established in 2009, the club conducts various activities aimed at sharing information and knowledge
                            in diverse technical fields such as programming, graphic design, networking, and cybersecurity.
                            These activities rely on participation, creativity, and innovation,
                            embodying the club's slogan: <span className='blue'>"We Grow When We Share."</span>
                        </span>
                    </div>
                    {!showMore && (
                            <div className="description-image">
                                <img src={descriptionImage} alt="descriptionImage" />
                            </div>
                        )}
                    
                </div>
                <div className="image">
                    <img src={image} alt="image" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
