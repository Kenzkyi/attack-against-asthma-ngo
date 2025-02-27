import React from "react";
import "../style/Team.css";

const teamMembers = [
  {
    name: "Temitope Omosebi Enoch",
    role: "Founder, Attack Against Asthma",
    image: "/src/assets/aboutus-six-in-one-pic/Temitope.jpg",
  },
  {
    name: "Omoniyi Ajayi Hope",
    role: "Co-Founder, Attack Against Asthma",
    image: "/src/assets/aboutus-six-in-one-pic/Omoniyi.jpg",
  },
  {
    name: "Effiong Maxwell",
    role: "Social Media Manager",
    image: "/src/assets/aboutus-six-in-one-pic/Effiong.jpg",
  },
  {
    name: "Udeji Mary",
    role: "Brand Photographer",
    image: "/src/assets/aboutus-six-in-one-pic/Udeji.jpg",
  },
  {
    name: "Odimgbe Arinze",
    role: "Web Developer",
    image: "/src/assets/aboutus-six-in-one-pic/Odimgbe.jpg",
  },
  {
    name: "Victoria Godwin",
    role: "Chief Operation Officer",
    image: "/src/assets/aboutus-six-in-one-pic/Victoria.jpg",
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
