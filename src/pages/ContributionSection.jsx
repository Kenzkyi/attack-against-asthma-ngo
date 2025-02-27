import React from "react";
import "../style/ContributionSection.css";

const ContributionSection = () => {
  return (
    <section className="contribution-sec">
      <div className="contribution-body">
        <h2 className="text-sec">
          You Can Contribute To A Society That Is Asthma Aware And Providing
          Inhalers For Asthmatic Students.
        </h2>
        <div className="buttons">
          <button className="donate-btn">Donate</button>
          <select className="dropdown">
            <option>Apply as</option>
            <option>Asthmatic students</option>
            <option>Volunteer</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default ContributionSection;
