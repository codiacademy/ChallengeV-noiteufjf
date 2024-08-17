import { Linkedin, Github } from "lucide-react";
import PropTypes from "prop-types";

import "./teamcard.css";

TeamCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  description: PropTypes.string,
  gitHubLink: PropTypes.string,
  linkedinLink: PropTypes.string,
};

export default function TeamCard({
  image,
  name,
  role,
  description,
  gitHubLink,
  linkedinLink,
}) {
  return (
    <div id="team-card">
      <div id="img">
        <img className="img-team" src={image} alt="Foto de perfil" />
      </div>
      <h3>{name}</h3>
      <span className="role">{role}</span>
      <p>{description}</p>
      <div className="icon-link">
        {gitHubLink && (
          <a href={gitHubLink} target="_blank">
            <Github className="icon" />
          </a>
        )}
        {linkedinLink && (
          <a href={linkedinLink} target="_blank">
            <Linkedin className="icon" />
          </a>
        )}
      </div>
    </div>
  );
}
