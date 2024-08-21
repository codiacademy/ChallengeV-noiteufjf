import { useState } from 'react'
import './page.css'

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

    return (
        <section style={{ marginBottom: '4rem'}}>
            <form className="register-form" >
                <h2>Cadastrar Usuário</h2>
                <section className='form-wrapper'>
                    <div>
                        <div>
                            <label htmlFor='name'>Nome</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Nome'
                                required
                                onChange={handleInputChange}
                                value={inputData.name}
                            />
                        </div>
                        <div>
                            <label htmlFor='tel'>Telefone</label>
                            <input
                                type="tel"
                                name="tel"
                                id="tel"
                                placeholder='Senha'
                                required
                                onChange={handleInputChange}
                                value={inputData.phone}
                            />
                        </div>
                        <div>
                            <label htmlFor='password'>Senha *</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder='Senha'
                                required
                                onChange={handleInputChange}
                                value={inputData.password}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor='email'>E-mail *</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder='E-mail'
                                required
                                onChange={handleInputChange}
                                value={inputData.email}
                            />
                        </div>
                        <div>
                            <label htmlFor='company-name'>Nome da Empresa</label>
                            <input
                                type="text"
                                name="company-name"
                                id="company-name"
                                placeholder='Empresa'
                                required
                                onChange={handleInputChange}
                                value={inputData.company_name}
                            />
                        </div>
                        <div>
                            <label htmlFor='cnpj'>CNPJ</label>
                            <input
                                type="text"
                                name="cnpj"
                                id="cnpj"
                                placeholder='CNPJ'
                                required
                                onChange={handleInputChange}
                                value={inputData.cnpj}
                            />
                        </div>
                    </div>
                </section>
                <button id='buttonRegister' aria-label='Cadastrar Usuário'>
                    Cadastrar
                </button>
            </form>
        </section>
    )
}