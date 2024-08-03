import TeamCard from '../../components/TeamCard/TeamCard'
import './team.css'

export default function Team() {
    return (
        <section id='team-page-section'>
            <h1>Nossa Equipe</h1>
            <p>Conheça os especialistas que compõem a nossa empresa</p>

            <div id='team-cards'>
                <TeamCard
                    name={"Esther"}
                    role={"Desenvolvedor"}
                    description={"Descrição da experiência e habilidades do membro da equipe."}
                />
                <TeamCard
                    name={"John"}
                    role={"Desenvolvedor"}
                    description={"Descrição da experiência e habilidades do membro da equipe."}
                />
                <TeamCard
                    name={"Leonardo Almeida"}
                    role={"Desenvolvedor"}
                    description={"Descrição da experiência e habilidades do membro da equipe."}
                />
                <TeamCard
                    name={"Leonardo Costa"}
                    role={"Desenvolvedor"}
                    description={"Descrição da experiência e habilidades do membro da equipe."}
                />
                <TeamCard
                    name={"Lucas"}
                    role={"Desenvolvedor"}
                    description={"Descrição da experiência e habilidades do membro da equipe."}
                />
                <TeamCard
                    name={"Natan"}
                    role={"Desenvolvedor"}
                    description={"Descrição da experiência e habilidades do membro da equipe."}
                />
                <TeamCard
                    name={"Nícolas"}
                    role={"Desenvolvedor"}
                    description={"Descrição da experiência e habilidades do membro da equipe."}
                />
                <TeamCard
                    name={"Patrício Samuel"}
                    role={"Desenvolvedor"}
                    description={"Descrição da experiência e habilidades do membro da equipe."}
                />
                <TeamCard
                    name={"Vinícius"}
                    role={"Desenvolvedor"}
                    description={"Descrição da experiência e habilidades do membro da equipe."}
                />
            </div>
        </section>
    )
}