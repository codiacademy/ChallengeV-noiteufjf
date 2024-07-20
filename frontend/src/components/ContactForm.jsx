import InputForm from "./InputForm.jsx"


export default function ContactForm() {
    return (
        <form className="form" action="/rotadoback" method="POST">
            <div className="labelForm">
                <div className="textFormUP">
                    <div className="textFormIn">
                        <p>Nome</p>
                        <InputForm id='nomeForm'></InputForm>
                        <p>Empresa</p>
                        <InputForm id='EmpresaForm'></InputForm>
                    </div>    
                </div>
                <div className="textFormUP">
                    <div className="textFormIn">
                        <p>Email</p>
                        <InputForm id='EmailForm'></InputForm>
                        <p>Cargo</p>
                        <InputForm id='CargoForm'></InputForm>
                    </div>    
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