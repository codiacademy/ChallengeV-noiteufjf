import certificado from '../../img/certificado.png'
import reconhecimento from '../../img/reconhecimento.png'
import certificado2 from '../../img/certificado2.png'
import './awards.css'

export default function Awards() {

    return (
        <div>
        <div class="certificates">
            <img src={certificado} alt="Certificado 1"></img>
            <img src={reconhecimento} alt="Equipe segurando certificado"></img>
            <img src={certificado2} alt="Certificado 2"></img>
        </div>
        <p className="recognation-text">Fomos eleitos em 2023 como a “Melhor Escola de Programação de Juiz de Fora”, com votação popular pelo instituto Idealize. Também recebemos o prêmio de “Melhor Escola de Informática/Tecnologia” da Zona da Mata Mineira pelo instituto Previlige.</p>
        </div>
    )
}