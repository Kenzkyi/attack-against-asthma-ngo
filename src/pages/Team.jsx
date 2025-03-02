import React from "react";
import "./Team.css";
import Temitope from "..src/assets/Temitope.png";
import Omoniyi from "..src/assets/Omoniyi.png";
import Effiong from "..src/assets/Effiong.png";
import Udeji from "..src/assets/Udeji.png";
import Odimgbe from "..src/assets/Odimgbe.png";
import Victoria from "..src/assets/Victoria.png";

const teamMembers = [
  {
    name: "Temitope Omosebi Enoch",
    role: "Founder, Attack Against Asthma",
    image: Temitope,
  },
  {
    name: "Omoniyi Ajayi Hope",
    role: "Co-Founder, Attack Against Asthma",
    image: Omoniyi,
  },
  {
    name: "Effiong Maxwell",
    role: "Social Media Manager",
    image: Effiong,
  },
  {
    name: "Udeji Mary",
    role: "Brand Photographer",
    image: Udeji,
  },
  {
    name: "Odimgbe Arinze",
    role: "Web Developer",
    image: Odimgbe,
  },
  {
    name: "Victoria Godwin",
    role: "Chief Operation Officer",
    image: Victoria,
  },
];

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
        {teamMembers.map((member) => (
          <div className="team-card" key={member.name}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
