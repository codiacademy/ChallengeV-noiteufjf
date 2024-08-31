import { useState } from 'react'
import { api } from '../../../lib/api'

export default function CreateProject({ closeModal }) {
    const [inputData, setInputData] = useState({
        name: '',
        cnpj: '',
        status: '',
        progress: '',
        client: '',
        userId: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const trimmedData = {
            name: inputData.name.trim(),
            cnpj: inputData.cnpj.trim(),
            status: inputData.status.trim(),
            progress: inputData.progress.trim(),
            client: inputData.client.trim(),
            userId: inputData.userId.trim()
            
        }
        api.post('/projects', trimmedData)
        .then(response => {
            console.log("Projeto criado com sucesso!", response.data);
            alert("Projeto criado com sucesso!");
            clearInputs();
            closeModal();
        }).catch(error => {
            const errorMessage = error.response?.data?.message || error.message || "Erro desconhecido";
            console.error("Erro ao criar projeto:", errorMessage);
            alert("Erro ao criar o projeto: " + errorMessage);
        }); 
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target

        setInputData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const clearInputs = () => {
        setInputData({
            name: '',
            cnpj: '',
            status: '',
            progress: '',
            client: '',
            userId: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className='text-2xl text-center'>Criar Projeto</h2>
            <section className='flex flex-wrap justify-center gap-x-4'>
                <div className='flex-auto'>
                    <div>
                        <label htmlFor='name' className='block'>Nome do Projeto</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder='Nome do projeto'
                            required
                            onChange={handleInputChange}
                            value={inputData.name}
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
                <div className='flex-auto'>

                <div>
                        <label htmlFor='client' className='block'>Cliente</label>
                        <input
                            type="text"
                            name="client"
                            id="client"
                            placeholder='Cliente'
                            required
                            onChange={handleInputChange}
                            value={inputData.client}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor='progress' className='block'>Progresso</label>
                        <input
                            type="text"
                            name="progress"
                            id="progress"
                            placeholder='Progresso'
                            required
                            onChange={handleInputChange}
                            value={inputData.progress}
                            className="w-full"
                        />
                    </div>

                    <div>
                        <label htmlFor='userId' className='block'>ID do cliente</label>
                        <input
                            type="text"
                            name="userId"
                            id="userId"
                            placeholder='Identificador do usuário'
                            required
                            onChange={handleInputChange}
                            value={inputData.userId}
                            className="w-full"
                        />
                    </div>
                    
                </div>
            </section>
            <button
            type='submit'
                className="w-full rounded-md bg-purple-600 px-4 py-2 font-medium text-lg text-gray-50 transition-colors hover:bg-purple-600/60"
                aria-label='Cadastrar Projeto'
                
            >
                Criar Projeto
            </button>
        </form>
    );
}