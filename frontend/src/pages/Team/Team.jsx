import TeamCard from "../../components/TeamCard/TeamCard";
import "./team.css";
import { teamData } from "../../public/team/teamData.js";

export default function Team() {
  return (
    <section id="team-page-section">
      <h1>Nossa Equipe</h1>
      <p>Conheça os especialistas que compõem a nossa empresa</p>

      <div id="team-cards">
        {Object.keys(teamData).map((key) => (
          <TeamCard
            key={key}
            image={teamData[key].image}
            name={teamData[key].name}
            role={teamData[key].role}
            description={teamData[key].description}
            linkedinLink={teamData[key].linkedinLink}
          />
        ))}
      </div>
    </section>
  );
}
