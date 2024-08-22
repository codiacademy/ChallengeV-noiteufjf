import { useState } from 'react'
// import './page.css'
import { api } from '../../../lib/api'

export default function CreateUser() {
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

    const createUser = (e) => {
        e.preventDefault()

        api.post('/users', inputData)
            .then(response => {
                alert(response.data)
                clearInputs()
            })
            .catch(error => {
                console.debug(error.response.data)
            })
    }

    const clearInputs = () => {
        setInputData({
            name: '',
            company_name: '',
            cnpj: '',
            email: '',
            phone: '',
            password: '',
        })
    }

    return (
        <form>
            <h2 className='text-2xl text-center'>Cadastrar Usuário</h2>
            <section className='flex flex-wrap justify-center gap-x-4'>
                <div className='flex-auto'>
                    <div>
                        <label htmlFor='name' className='block'>Nome</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder='Nome'
                            required
                            onChange={handleInputChange}
                            value={inputData.name}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor='phone' className='block'>Telefone</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder='Senha'
                            required
                            onChange={handleInputChange}
                            value={inputData.phone}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor='password' className='block'>Senha *</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Senha'
                            required
                            onChange={handleInputChange}
                            value={inputData.password}
                            className="w-full"
                        />
                    </div>
                </div>
                <div className='flex-auto'>
                    <div>
                        <label htmlFor='email' className='block'>E-mail *</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder='E-mail'
                            required
                            onChange={handleInputChange}
                            value={inputData.email}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor='company_name' className='block'>Nome da Empresa</label>
                        <input
                            type="text"
                            name="company_name"
                            id="company_name"
                            placeholder='Empresa'
                            required
                            onChange={handleInputChange}
                            value={inputData.company_name}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor='cnpj' className='block'>CNPJ</label>
                        <input
                            type="text"
                            name="cnpj"
                            id="cnpj"
                            placeholder='CNPJ'
                            required
                            onChange={handleInputChange}
                            value={inputData.cnpj}
                            className="w-full"
                        />
                    </div>
                </div>
            </section>
            <button className="w-full rounded-md bg-purple-600 px-4 py-2 font-medium text-lg text-gray-50 transition-colors hover:bg-purple-600/60" aria-label='Cadastrar Usuário' onClick={createUser}>
                Cadastrar
            </button>
        </form>
    )
}