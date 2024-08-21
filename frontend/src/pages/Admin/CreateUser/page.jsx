import './page.css'

export default function CreateUser() {

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
                            />
                        </div>
                    </div>
                </section>
                <button id='buttonRegister'>
                    Cadastrar
                </button>
            </form>
        </section>
    )
}