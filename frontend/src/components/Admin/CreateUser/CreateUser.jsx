import { useState } from "react";
import { api } from "../../../lib/api";
import { toast } from "react-toastify";

export default function CreateUser() {
  const notify = (message, type) => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    }
  };

  const [inputData, setInputData] = useState({
    name: "",
    company_name: "",
    cnpj: "",
    email: "",
    phone: "",
    password: "",
    isAdmin: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createUser = (e) => {
    e.preventDefault();

    const trimmedData = {
      name: inputData.name.trim(),
      company_name: inputData.company_name.trim(),
      cnpj: inputData.cnpj.trim(),
      email: inputData.email.trim(),
      phone: inputData.phone.trim(),
      password: inputData.password.trim(),
      isAdmin: inputData.isAdmin === "true",
    };

    api
      .post("/users", trimmedData)
      .then((response) => {
        notify(response.data, "success");
        clearInputs();
      })
      .catch((error) => {
        notify(`Erro ao cadastrar usuário: ${error}`, "error");
      });
  };

  const clearInputs = () => {
    setInputData({
      name: "",
      company_name: "",
      cnpj: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={createUser}>
        <h2 className="text-2xl text-center">Cadastrar Usuário</h2>
        <section className="flex flex-wrap justify-center gap-x-4">
          <div className="flex-auto">
            <div>
              <label htmlFor="name" className="block">
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nome"
                required
                onChange={handleInputChange}
                value={inputData.name}
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block">
                Telefone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="(XX) XXXXX-XXXX"
                pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"
                required
                onChange={handleInputChange}
                value={inputData.phone}
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="password" className="block">
                Senha *
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
                required
                onChange={handleInputChange}
                value={inputData.password}
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="isAdmin" className="block">
                É Admin?
              </label>
              <select
                name="isAdmin"
                id="isAdmin"
                onChange={handleInputChange}
                value={inputData.isAdmin}
                className="w-full p-2 rounded-md"
              >
                <option value="false">Não</option>
                <option value="true">Sim</option>
              </select>
            </div>
          </div>
          <div className="flex-auto">
            <div>
              <label htmlFor="email" className="block">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                required
                onChange={handleInputChange}
                value={inputData.email}
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="company_name" className="block">
                Nome da Empresa
              </label>
              <input
                type="text"
                name="company_name"
                id="company_name"
                placeholder="Empresa"
                required
                onChange={handleInputChange}
                value={inputData.company_name}
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="cnpj" className="block">
                CNPJ
              </label>
              <input
                type="text"
                name="cnpj"
                id="cnpj"
                placeholder="CNPJ"
                required
                onChange={handleInputChange}
                value={inputData.cnpj}
                className="w-full"
              />
            </div>
          </div>
        </section>
        <button
          className="w-full rounded-md bg-purple-600 px-4 py-2 font-medium text-lg text-gray-50 transition-colors hover:bg-purple-600/60 mt-4"
          aria-label="Cadastrar Usuário"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </>
  );
}
