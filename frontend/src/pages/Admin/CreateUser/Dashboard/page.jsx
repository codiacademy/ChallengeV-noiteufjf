import { useState } from "react";
import ShowUsers from "../../../../components/ShowUsers/ShowUsers";

export default function Dashboard() {
    const [componenteAtivo, setComponenteAtivo] = useState('Users');

    const renderComponente = () => {
        if (componenteAtivo === 'Users') {
            return <ShowUsers />;
        } else if (componenteAtivo === 'Projects') {
            return <div>Outro componente</div>;
        }
        return null;
    };

    return (
        <section className="h-screen mt-16">
            <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">
                <button onClick={() => setComponenteAtivo('Users')}>Mostrar Componente A</button>
                <button onClick={() => setComponenteAtivo('Projects')}>Mostrar Componente B</button>
                {renderComponente()}
            </div>
        </section>
    );
}