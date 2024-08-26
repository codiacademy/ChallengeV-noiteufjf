/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export default function EditUser({user}) {
    const [inputData, setInputData] = useState({
        name: '',
        company_name: '',
        cnpj: '',
        email: '',
        phone: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setInputData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

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
        <div className="mt-4">
            <div className="grid gap-1 mb-4">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={inputData.name} onChange={handleInputChange} className="border border-gray-300 rounded-md p-1"/>
            </div>

            <div className="grid gap-1 mb-4">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"  value={inputData.email} onChange={handleInputChange} 
                className="border border-gray-300 rounded-md p-1"/>
            </div>

            <div className="grid gap-1 mb-4">
                <label htmlFor="company">Empresa</label>
                <input type="text" id="company" name="company" value={inputData.company_name} onChange={handleInputChange} className="border border-gray-300 rounded-md p-1"/>
            </div>

            <div className="grid gap-1 mb-4">
                <label htmlFor="cnpj">CNPJ</label>
                <input type="text" id="cnpj" name="cnpj" value={inputData.cnpj} onChange={handleInputChange} className="border border-gray-300 rounded-md p-1"/>
            </div>

            <div className="grid gap-1 mb-4">
                <label htmlFor="phone">Telefone</label>
                <input type="tel" id="phone" name="phone" value={inputData.phone} onChange={handleInputChange}className="border border-gray-300 rounded-md p-1"/>
            </div>

            <button className="w-full rounded-md bg-purple-600 px-4 py-2 font-medium text-lg text-gray-50 transition-colors hover:bg-purple-600/60" aria-label='Salvar Usuário'>
                Salvar
            </button>
        </div>
    )
}