import TeamCard from "../../components/TeamCard/TeamCard";
import "./team.css";
import { teamData } from "../../public/team/teamData.js";

export default function Team() {
  return (
    <section id="team-page-section">
      <h1>Nossa Equipe</h1>
      <p>Conheça os especialistas que compõem a nossa empresa</p>

      <div id="team-cards">
        {teamData.map((member) => (
          <TeamCard key={member.id} data={member} />
        ))}
      </div>
    </section>
  );
}
