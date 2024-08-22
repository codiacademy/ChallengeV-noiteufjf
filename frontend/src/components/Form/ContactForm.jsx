import { useState } from "react";
import "./form.css";
import { api } from "../../lib/api.js";

// eslint-disable-next-line react/prop-types
export default function ContactForm({ notify }) {
  const [company_name, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function createContact(event) {
    event.preventDefault();

    const data = {
      company_name,
      name,
      office,
      email,
      message,
    };
    try {
      await api.post("/contactForms", data);
      notify("Mensagem enviada com sucesso!", "success");
    } catch (error) {
      if (error) {
        notify("Erro ao enviar mensagem!", "error");
      }
    }
  }
  return (
    <form className="form" onSubmit={createContact}>
      <div className="labelForm">
        <div>
          <p>Nome</p>
          <div className="imputForm">
            <input
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <p>Empresa</p>
          <div className="imputForm">
            <input
              type="text"
              required
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <p>Email</p>
          <div className="imputForm">
            <input
              type="text"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p>Cargo</p>
          <div className="imputForm">
            <input
              type="text"
              required
              onChange={(e) => setOffice(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="comentaryForm">
        <p>Comentário</p>
        <div className="imputFormComentary">
          <textarea
            name="msg"
            rows="4"
            cols="50"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="buttonSubmit">
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}
