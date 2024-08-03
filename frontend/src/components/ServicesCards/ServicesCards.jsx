import './servicescard.css'


export default function ServicesCard({icon,title,paragraph,iconBackground}) {
  return (
      <div className="card">
        <div className="icon" style={{backgroundColor:iconBackground}}>
            {icon}
        </div>
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
  );
}