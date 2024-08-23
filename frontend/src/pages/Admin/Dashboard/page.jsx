import { useState } from "react";
import ShowUsers from "../../../components/Admin/ShowUsers/ShowUsers";

export default function Dashboard() {
    const [componenteAtivo, setComponenteAtivo] = useState('Users');

    const renderComponente = () => {
        switch (componenteAtivo) {
            case 'Users':
                return <ShowUsers />;
            case 'Projects':
                return <div>Outro componente</div>;
            default:
                return null;
        }
    };

    return (
        <section className="h-screen mt-16">
            <div className="mx-auto max-w-[1200px] px-2 py-8 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2 mb-6">
                    <button onClick={() => setComponenteAtivo('Users')}
                        className={`border border-gray-300 rounded-md px-4 py-2 transition-colors hover:bg-gray-400/60 ${componenteAtivo === 'Users' ? 'bg-gray-400 text-white' : ''}`}
                    >Ver Usuários</button>
                    <button onClick={() => setComponenteAtivo('Projects')} className={`border border-gray-300 rounded-md px-4 py-2 transition-colors hover:bg-gray-400/60 ${componenteAtivo === 'Projects' ? 'bg-gray-400 text-white' : ''}`}>Ver Projetos</button>
                </div>
                {renderComponente()}
            </div>
        </section>
    );
}