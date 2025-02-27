import React from "react";
import "../style/AwardSection.css";

const awards = [
  {
    image: "/src/assets/aboutus-medals/award1.png",
    title: "2024",
    description: "Lagos NGO Award - Awarded 12th June 2024",
  },
  {
    image: "/src/assets/aboutus-medals/award2.png",
    title: "2024",
    description: "WANGO Humanitarian Award - Recognized for service, 2024",
  },
  {
    image: "/src/assets/aboutus-medals/award3.png",
    title: "2024",
    description: "AFH Health Award - Honored for excellence, 2024",
  },
  {
    image: "/src/assets/aboutus-medals/award4.png",
    title: "2024",
    description: "The NBA Award - Awarded on 17th June 2024",
  },
  {
    image: "/src/assets/aboutus-medals/award5.png",
    title: "2024",
    description: "Lagos NGO Award - Honored on 19th June 2024",
  },
  {
    image: "/src/assets/aboutus-medals/award6.png",
    title: "2024",
    description: "WANGO Humanitarian Award - Recognized 20th June 2024",
  },
];

const AwardSection = () => {
  return (
    <section className="awards-section">
      <h2 className="awards-title">Award & Recognition</h2>
      <div className="awards-container">
        {awards.map((award, index) => (
          <div key={index} className="award-card">
            <img src={award.image} alt={award.title} className="award-image" />
            <p className="award-description">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardSection;
