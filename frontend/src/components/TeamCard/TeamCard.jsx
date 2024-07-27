import { Linkedin } from 'lucide-react'
import PropTypes from 'prop-types';

import './teamcard.css'

TeamCard.propTypes = {
    name: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string,
}

export default function TeamCard({ name, role, description }) {

    return (
        <div id='team-card'>
            <div id="img"></div>
            <h3>{name}</h3>
            <span>{role}</span>
            <p>
                {description}
            </p>
            <Linkedin />
        </div>
    )
}