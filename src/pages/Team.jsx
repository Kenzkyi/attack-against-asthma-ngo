import React from "react";
import "../style/Team.css";
import team1 from "../assets/public/aboutus-six-in-one-pic/Temitope.jpg"
import team2 from "../assets/public/aboutus-six-in-one-pic/Omoniyi.jpg"
import team3 from "../assets/public/aboutus-six-in-one-pic/Effiong.jpg"
import team4 from "../assets/public/aboutus-six-in-one-pic/Udeji.jpg"
import team5 from "../assets/public/aboutus-six-in-one-pic/Odimgbe.jpg"
import team6 from "../assets/public/aboutus-six-in-one-pic/Victoria.jpg"


const Team = () => {
  return (
    <section className="team-sec">
      <h2 className="heading">Meet Our Team</h2>
      <p className="subtitle">Passionate, Driven, and United for Change</p>
      <p className="description">
        At Attack Against Asthma, our team is made up of dedicated
        professionals, each with a shared mission to fight asthma and improve
        the lives of those affected by it.
      </p>
      <div className="team-grid">
          <div className="team-card">
            <img src={team1} alt='Temitope Omosebi Enoch' className="team-image" />
            <h3 className="team-name">Temitope Omosebi Enoch</h3>
            <p className="team-role">Founder, Attack Against Asthma</p>
          </div>
          <div className="team-card">
            <img src={team2} alt='Omoniyi Ajayi Hope' className="team-image" />
            <h3 className="team-name">Omoniyi Ajayi Hope</h3>
            <p className="team-role">Co-Founder, Attack Against Asthma</p>
          </div>
          <div className="team-card">
            <img src={team3} alt='Effiong Maxwell' className="team-image" />
            <h3 className="team-name">Effiong Maxwell</h3>
            <p className="team-role">Social Media Manager</p>
          </div>
          <div className="team-card">
            <img src={team4} alt='Udeji Mary' className="team-image" />
            <h3 className="team-name">Udeji Mary</h3>
            <p className="team-role">Brand Photographer</p>
          </div>
          <div className="team-card">
            <img src={team5} alt='Odimgbe Arinze' className="team-image" />
            <h3 className="team-name">Odimgbe Arinze</h3>
            <p className="team-role">Web Developer</p>
          </div>
          <div className="team-card">
            <img src={team6} alt='Victoria Godwin' className="team-image" />
            <h3 className="team-name">Victoria Godwin</h3>
            <p className="team-role">Chief Operation Officer</p>
          </div>
      </div>
    </section>
  );
};

export default Team;
