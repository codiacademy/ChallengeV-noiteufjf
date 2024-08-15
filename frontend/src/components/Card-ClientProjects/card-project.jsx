import './card-project.css'

export default function CardProject({projectName, onClick}) {
    return (
        <div className="cardproject" onClick={() => onClick(projectName)}>
            <img src="" alt="" />
            <h2>{projectName}</h2>
        </div>
    )
}