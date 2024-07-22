import InputForm from "./InputForm.jsx"
import './form.css'

export default function ContactForm() {
    return (
        <form className="form" action="/rotadoback" method="POST">
            <div className="labelForm">
                <div>
                    <p>Nome</p>
                    <InputForm id='nomeForm'></InputForm>
                    <p>Empresa</p>
                    <InputForm id='EmpresaForm' paragrafo='teste'></InputForm>
                </div>
                <div>
                    <p>Email</p>
                    <InputForm id='EmailForm'></InputForm>
                    <p>Cargo</p>
                    <InputForm id='CargoForm'></InputForm>
                </div>
            </div>

            <div className="comentaryForm">
                <p>Comentário</p>
                <div className="imputFormComentary">
                    <textarea name="msg" rows="4" cols="50"></textarea>
                </div>
            </div>

            <div className="buttonSubmit">
                <button>
                    <p id="sub">Enviar</p>
                </button>
            </div>
        </form>
    )
}