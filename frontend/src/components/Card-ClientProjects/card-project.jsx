import './card-project.css'

export default function CardProject({projectName, onClick}) {
    return (
        <div className="cardproject" onClick={() => onClick(projectName)}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaD3a7oK52UbZWC3euzNxxR5Dli0tb7L1Iyg&s" alt="" />
            <div className="titleCardProject">
                <h2>{projectName}</h2>
            </div>
            
        </div>
    )
}