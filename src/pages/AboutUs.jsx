<<<<<<< HEAD
import "./AboutUs.css";
import HeroVideo from "../assets/HeroVideo.png";
=======
import React from "react";
import "../style/AboutUs.css";
<<<<<<< HEAD
// import HeroVideo from "../assets/HeroVideo.png";
>>>>>>> 33554b8ba99b183bdb833139adbe84207593b0ab
=======
import Team from "./Team";
import AwardSection from "./AwardSection";
import ContributionSection from "./ContributionSection";
>>>>>>> a6daea1587ab71e09e2a35922ee6cbc45c786e15

const AboutUs = () => {
  return (
    <div className="main-container">
      <header className="about-grid">
        <div className="about-left">
          <div className="divider-cont">
            <hr className="divider" />
            <h3 className="subtitle">Know More About Us</h3>
          </div>
          <div className="tittle-sec">
            <h2 className="title">
              We are a <span className="highlight">non governmental </span>
              <br />
              <span className="newline">organisation</span>
            </h2>
          </div>
        </div>
        <div className="about-right">
          <h3 className="mission-tittle">
            Empowering Lives, One Breath at a Time
          </h3>
          <p className="mission-text">
            At Attack Against Asthma, we believe that no one should have to
            strugle for a breath. Our mission is to fight back against asthma
            through education, advocacy, and direct support to those who need it
            most-especially students.
          </p>
        </div>
      </header>
      <div className="image-container">
        <div className="image-container-wrap">
          <img
            src="/src/assets/aboutus-first-pic.png"
            alt="Team members of Attack Against Asthma"
            className="team-image2"
          />
          <div className="image-bg-about"></div>
          <button className="play-button">▶</button>
        </div>
      </div>
      <div className="bio-mission">
        <h2 className="bio-title">Brif Bio, Mission & Vision</h2>
        <p className="bio-founder">
          Founby Temitope Omosebi Enoch and a passionate group <br /> of
          healthcare professionals, educators, and community leaders
        </p>
        <p className="bio-text">
          At Attack Against Asthma, we believe that no one should have to
          struggle for a breath. Our mission is to fight back against asthma
          through education, <br />
          advocacy, and direct support to those who need it most, especially
          students. We are dedicated to raising awareness, providing resources,
          and creating safer <br />
          environments for individuals living with asthma.
        </p>
        <p className="bio-text">
          Founded by a passionate group of healthcare professionals, educators,
          and community leaders, we understand the daily challenges that asthma
          can bring, <br />
          particularly for young students. Through our targeted programs,
          including inhaler distribution, workshops, and awareness campaigns, we
          equip both <br />
          students and schools with the knowledge and tools to manage asthma
          effectively.
        </p>
        <p className="bio-text">
          We work tirelessly to raise awareness about asthmas impact on
          students lives, ensuring that teachers, parents, and peers are
          informed and ready to support. <br />
          Our asthma-friendly initiatives, like providing inhalers to schools
          and organizing community outreach programs, help create safer and
          healthier spaces for all <br />
          students.
        </p>
      </div>
      <div className="divider-cont">
        <hr className="second-divider" />
      </div>
      <Team />
      <AwardSection />
      <ContributionSection />
    </div>
  );
};

export default AboutUs;
