import { useEffect, useState } from "react";

export default function EditProjects({ project }) {
    const [inputData, setInputData] = useState({
        name: '',
        status: '',
        cnpj: '',
        progress: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setInputData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleStatusChange = (e) => {
        const { value, checked } = e.target;

        setInputData(prevState => ({
            ...prevState,
            status: checked
                ? [...prevState.status, value]
                : prevState.status.filter(status => status !== value)
        }));
    };

    useEffect(() => {
        if (project) {
            setInputData({
                name: project.name,
                status: project.status ? project.status.split(",") : [], 
                progress: project.progress,
                cnpj: project.cnpj,
                
            });
        }
    }, [project]);

    return (
        <div className="mt-4">
            <div className="grid gap-1 mb-4">
                <label htmlFor="name">Projeto</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={inputData.name} 
                    onChange={handleInputChange} 
                    className="border border-gray-300 rounded-md p-1" 
                />
            </div>

            <div className="grid gap-1 mb-4">
                <label>Status</label>
                <div className="flex items-center gap-4">
                    <label className="flex items-center ">
                        <input 
                            type="radio" 
                            name="status" 
                            value="em-desenvolvimento" 
                            checked={inputData.status.includes('em-desenvolvimento')}
                            onChange={handleStatusChange} 
                            className="form-radio text-purple-600 cursor-pointer" 
                        />
                        <span className="ml-2">Em desenvolvimento</span>
                    </label>
                    <label className="flex items-center">
                        <input 
                            type="radio" 
                            name="status" 
                            value="em-testes" 
                            checked={inputData.status.includes('em-testes')}
                            onChange={handleStatusChange} 
                            className="form-radio text-purple-600 cursor-pointer" 
                        />
                        <span className="ml-2">Em testes</span>
                    </label>
                    <label className="flex items-center">
                        <input 
                            type="radio" 
                            name="status" 
                            value="finalizado" 
                            checked={inputData.status.includes('finalizado')}
                            onChange={handleStatusChange} 
                            className="form-radio text-purple-600 cursor-pointer" 
                        />
                        <span className="ml-2">Finalizado</span>
                    </label>
                </div>
            </div>

            <div className="grid gap-1 mb-4">
                <label htmlFor="progress">Progresso</label>
                <input 
                    type="text" 
                    id="progress" 
                    name="progress" 
                    value={inputData.progress} 
                    onChange={handleInputChange} 
                    className="border border-gray-300 rounded-md p-1" 
                />
            </div>

            <div className="grid gap-1 mb-4">
                <label htmlFor="cnpj">CNPJ</label>
                <input 
                    type="text" 
                    id="cnpj" 
                    name="cnpj" 
                    value={inputData.cnpj} 
                    onChange={handleInputChange} 
                    className="border border-gray-300 rounded-md p-1" 
                />
            </div>

            

            <button className="w-full rounded-md bg-purple-600 px-4 py-2 font-medium text-lg text-gray-50 transition-colors hover:bg-purple-600/60" aria-label="Salvar Usuário">
                Salvar
            </button>
        </div>
    );
}