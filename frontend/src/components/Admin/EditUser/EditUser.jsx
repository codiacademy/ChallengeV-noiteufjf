/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { api } from "../../../lib/api"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditUser({ user }) {
    const notify = (message, type) => {
        if (type === "success") {
            toast.success(message);
        } else if (type === "error") {
            toast.error(message);
        }
    };

    const [inputData, setInputData] = useState({
        name: '',
        company_name: '',
        cnpj: '',
        email: '',
        phone: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setInputData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleEditUser = (e) => {
        e.preventDefault()

        const trimmedData = {
            name: inputData.name.trim(),
            company_name: inputData.company_name.trim(),
            cnpj: inputData.cnpj.trim(),
            email: inputData.email.trim(),
            phone: inputData.phone.trim(),
        };

        api
            .put(`/users/${user.id}`, trimmedData)
            .then((response) => {
                notify(response.data, "success");
            })
            .catch((error) => {
                const errorMessage = error.response.data || error
                notify(errorMessage, "error");
            });
    };

    useEffect(() => {
        if (user) {
            setInputData({
                name: user.name,
                company_name: user.company_name,
                cnpj: user.cnpj,
                email: user.email,
                phone: user.phone,
            });
        }
    }, [user]);

    return (
        <form className="mt-4" onSubmit={handleEditUser}>
            <div className="grid gap-1 mb-4">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={inputData.name} onChange={handleInputChange} 
                className="border border-gray-300 rounded-md p-1 m-0 h-auto"/>
            </div>

            <div className="grid gap-1 mb-4">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"  value={inputData.email} onChange={handleInputChange} required
                className="border border-gray-300 rounded-md p-1 m-0 h-auto"/>
            </div>

            <div className="grid gap-1 mb-4">
                <label htmlFor="company">Empresa</label>
                <input type="text" id="company" name="company" value={inputData.company_name} onChange={handleInputChange} required
                className="border border-gray-300 rounded-md p-1 m-0 h-auto"/>
            </div>

            <div className="grid gap-1 mb-4">
                <label htmlFor="cnpj">CNPJ</label>
                <input type="text" id="cnpj" name="cnpj" value={inputData.cnpj} onChange={handleInputChange} required
                className="border border-gray-300 rounded-md p-1 m-0 h-auto"/>
            </div>

            <div className="grid gap-1 mb-4">
                <label htmlFor="phone">Telefone</label>
                <input type="tel" id="phone" name="phone" value={inputData.phone} onChange={handleInputChange} required
                className="border border-gray-300 rounded-md p-1 m-0 h-auto"/>
            </div>

            <button className="w-full rounded-md bg-purple-600 px-4 py-2 font-medium text-lg text-gray-50 transition-colors hover:bg-purple-600/60"
                type="submit"
                aria-label='Salvar Usuário'
            >
                Salvar
            </button>

            <ToastContainer />
        </form>
    )
}