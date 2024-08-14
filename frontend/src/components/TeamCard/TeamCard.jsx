import { Linkedin } from "lucide-react";
import PropTypes from "prop-types";

import "./teamcard.css";

TeamCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  description: PropTypes.string,
};

export default function TeamCard({ image, name, role, description }) {
  return (
    <div id="team-card">
      <div id="img">
        <img className="img-team" src={image} alt="Foto de perfil" />
      </div>
      <h3>{name}</h3>
      <span className="role">{role}</span>
      <p>{description}</p>
      <Linkedin className="icon" />
    </div>
  );
}
