import React from "react";
import "../style/AwardSection.css";
import award1 from "../assets/public/aboutus-medals/award1.png"
import award2 from "../assets/public/aboutus-medals/award2.png"
import award3 from "../assets/public/aboutus-medals/award3.png"
import award4 from "../assets/public/aboutus-medals/award4.png"
import award5 from "../assets/public/aboutus-medals/award5.png"
import award6 from "../assets/public/aboutus-medals/award6.png"


const AwardSection = () => {
  return (
    <section className="awards-section">
      <h2 className="awards-title">Award & Recognition</h2>
      <div className="awards-container">
          <div className="award-card">
            <img src={award1} className="award-image" />
            <p className="award-description">Lagos NGO Award - Awarded 12th June 2024</p>
          </div>
          <div className="award-card">
            <img src={award2} className="award-image" />
            <p className="award-description">WANGO Humanitarian Award - Recognized for service, 2024</p>
          </div>
          <div className="award-card">
            <img src={award3} className="award-image" />
            <p className="award-description">AFH Health Award - Honored for excellence, 2024</p>
          </div>
          <div className="award-card">
            <img src={award4} className="award-image" />
            <p className="award-description">The NBA Award - Awarded on 17th June 2024</p>
          </div>
          <div className="award-card">
            <img src={award5} className="award-image" />
            <p className="award-description">Lagos NGO Award - Honored on 19th June 2024</p>
          </div>
          <div className="award-card">
            <img src={award6} className="award-image" />
            <p className="award-description">WANGO Humanitarian Award - Recognized 20th June 2024</p>
          </div>
      </div>
    </section>
  );
};

export default AwardSection;
