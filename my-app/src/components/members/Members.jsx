import React, { useState, useEffect } from "react";
import axios from "axios"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedinIn } from "react-icons/fa";
import "./members.css";

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getMembers = async () => {
      try {
        const response = await axios.get("https://ftc-website-backend-production.up.railway.app/api/members/");
        const updatedMembers = response.data.map((member) => ({
          ...member,
          image: member.image.startsWith("/media/")
            ? `https://ftc-website-backend-production.up.railway.app${member.image}`
            : `https://ftc-website-backend-production.up.railway.app/media/${member.image}`,
        }));
        setMembers(updatedMembers);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };
    getMembers();
  }, []);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <div id="Members" className="Members-section">
      <div className="title">Members</div>
      <div className="subtitle">Meet Our Team</div>
      <Slider className="flex members" {...settings}>
        
         { members.map((member) => (
            <div key={member.id} className="member flex">
              <div className="member-card flex">
                <img
                  src={member.image}
                  alt={member.name}
                  onError={(e) => (e.target.src = "default-placeholder.png")} 
                />
                <div className="member-description">{member.description}</div>
                <div className="linkedin-icon">
                  <a
                    href={member.linkedin_account}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size={25} color="#61DBFB" />
                  </a>
                </div>
              </div>
              <div className="member-details">
                <p>{member.department}</p>
                <p>{member.role}</p>
                <p>{member.name}</p>
                <p>{member.prom}</p>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
};

export default Members;
