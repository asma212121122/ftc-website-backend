import React , { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css'
import Navbar from './Navbar'
import Arrow from './images/arrow.png';
import Image1 from './images/image2.png';
import Image2 from './images/img6.png';
import Image3 from './images/img9.jpg';
import Image4 from './images/img12.jpg';
import Image5 from './images/img11.jpg';

const Home = () =>{

    const images = [
        Image1 ,
        Image2 ,
        Image3 ,
        Image4 ,
        Image5 ,
    ];
    const settings = {
        dots: true, 
        speed: 500, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 3000, 
        arrows: false,
        centerMode: true, 
        centerPadding: "18%" ,
        focusOnSelect: true,
      };
   
    return (
    <div id="Home" className="home">
        <Navbar />
        <div className="content">
            <div className="title">FUTURE TECH CLUB</div>
            <div className="description">The first and the only scientific club at the National Higher School of ICT and Post.</div>
            <div className="buttons">
                <button className="primary-btn" >Join us</button>
                <button className="secondary-btn">Contact us</button>
            </div>
            
        </div>
        <Slider className="image-slider" {...settings}>
            {images.map((image,index) => (
                <div key={image.id} className="slide">
                    <img
                    src={image}
                    alt={`Slide ${index + 1}`} 
                    />
                </div>
            ))}
        </Slider>
        <div className="arrow"><img src={Arrow} alt="arrow" /></div>
    </div>
    );
};
export default Home;