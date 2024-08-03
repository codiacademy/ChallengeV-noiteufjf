import "./cardtestimony.css"
import {Star}from "lucide-react"
export default function Cardtestimony() {
    return (
        <div id="cardtestimony">
            <div><Star/><Star/><Star/><Star/><Star/></div>
            <p id="testimony-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio necessitatibus dolorum
                eius quidem assumenda enim est nesciunt sed labore.</p>
            <div id="client">
                <div id="client-img"></div>
                <div>
                    <h3>Nome Sobrenome</h3>
                    <span>Cargo, Empresa</span>
                </div>
            </div>

        </div>
    )
}