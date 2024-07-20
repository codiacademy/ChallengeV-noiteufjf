import InputForm from "./InputForm.jsx"


export default function ContactForm() {
    return (
        <div className="form">
            <div className="labelForm">
                <div className="textFormUP">
                    <div className="textFormIn">
                        <p>Nome</p>
                        <InputForm></InputForm>
                        <p>Email</p>
                        <InputForm></InputForm>
                    </div>    
                </div>
                <div className="textFormUP">
                    <div className="textFormIn">
                        <p>Empresa</p>
                        <InputForm></InputForm>
                        <p>Cargo</p>
                        <InputForm></InputForm>
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
        </div>
    )
}