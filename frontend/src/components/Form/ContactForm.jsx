import { useState } from "react"
import './form.css'
import { api } from "../../lib/api.js";

export default function ContactForm() {
    const [company_name, setCompanyName] = useState("");
    const [name, setName] = useState("");
    const [office, setOffice] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    async function createContact(event) {
        event.preventDefault()

        const data = {
            company_name,
            name,
            office,
            email,
            message
        }
        try {
            await api.post("/contactForms", data).then (() => {
                alert(
                    "mensagem enviada com sucesso!"
                )
            })
        } catch (error) {
            if (error){
                console.log(error.response)
            }
        }
    }

    return (
        <form className="form">
            <div className="labelForm">
                <div>
                    <p>Nome</p>
                    <div className="imputForm">
                        <input type="text" required onChange={e => setName(e.target.value)} />
                    </div>
                    <p>Empresa</p>
                    <div className="imputForm">
                        <input type="text" required onChange={e => setCompanyName(e.target.value)} />
                    </div>
                </div>
                <div>
                    <p>Email</p>
                    <div className="imputForm">
                        <input type="text" required onChange={e => setEmail(e.target.value)} />
                    </div>
                    <p>Cargo</p>
                    <div className="imputForm">
                        <input type="text" required onChange={e => setOffice(e.target.value)} />
                    </div>
                </div>
            </div>

            <div className="comentaryForm">
                <p>Comentário</p>
                <div className="imputFormComentary">
                    <textarea name="msg" rows="4" cols="50" onChange={e => setMessage(e.target.value)}></textarea>
                </div>
            </div>

            <div className="buttonSubmit">
                <button onClick={createContact}>
                    Enviar
                </button>
            </div>
        </form>
    )
}