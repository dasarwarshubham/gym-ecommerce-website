import React from "react";

const TeamMemberCard = ({ data }) => {
  return (
    <div className="team-member-card">
      <img
        src={data.imageUrl}
        alt={data.name}
        className="team-member-image img-fluid w-100"
      />
      <h3 className="team-member-name">{data.name}</h3>
      <p className="team-member-role">{data.role}</p>
      <p className="team-member-description">{data.description}</p>
    </div>
  );
};

export default TeamMemberCard;
