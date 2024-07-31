import './ClientProject.css'
import CardProject from '../../components/Card-ClientProjects/card-project'
import { SidebarOpen } from 'lucide-react'
import { useState } from 'react';

export default function ClientProjects() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <section style={{ marginTop: '6rem' }}>
            <button id='btn-sidebar' onClick={toggleSidebar}><SidebarOpen /></button>
            <section className="ContainerProject">
                <div className={`sidebar ${isSidebarVisible ? 'active' : ''}`}>
                    <div className="sidbar-projects">
                        <CardProject textcard={"Projeto 1"} />
                        <CardProject textcard={"Projeto 2"} />
                        <CardProject textcard={"Projeto 3"} />
                        <CardProject textcard={"Projeto 4"} />
                        <CardProject textcard={"Projeto 5"} />
                        <CardProject textcard={"Projeto 6"} />
                    </div>
                </div>
                <span id='linhacontent'></span>

                <main className="content-project">
                    <div className="labelgraphic">
                        <h2> projeto 1</h2>
                        <div className="bola">

                        </div>
                        <div className="progressBar">
                            <div className="bar">

                            </div>
                        </div>
                    </div>

                    <div className="etapas">
                        <div className="checktext">
                            <h2>Etapas Concluidas</h2>
                            <div>
                                <input type="checkbox" disabled />
                                <label htmlFor="">
                                    Planejamento inicial
                                </label>
                            </div>

                            <div>
                                <input type="checkbox" disabled />
                                <label htmlFor="">
                                    Planejamento inicial
                                </label>
                            </div>

                            <div>
                                <input type="checkbox" disabled />
                                <label htmlFor="">
                                    Planejamento inicial
                                </label>
                            </div>

                            <div>
                                <input type="checkbox" disabled />
                                <label htmlFor="">
                                    Planejamento inicial
                                </label>
                            </div>

                            <div>
                                <input type="checkbox" disabled />
                                <label htmlFor="">
                                    Planejamento inicial
                                </label>
                            </div>

                        </div>

                        <span id='linhatext'></span>


                        <div className="checktext">
                            <h2>Próximas Etapas</h2>
                            <div>
                                <input type="checkbox" disabled />
                                <label htmlFor="">
                                    Planejamento inicial
                                </label>
                            </div>

                            <div>
                                <input type="checkbox" disabled />
                                <label htmlFor="">
                                    Planejamento inicial
                                </label>
                            </div>

                            <div>
                                <input type="checkbox" disabled />
                                <label htmlFor="">
                                    Planejamento inicial
                                </label>
                            </div>

                            <div>
                                <input type="checkbox" disabled />
                                <label htmlFor="">
                                    Planejamento inicial
                                </label>
                            </div>

                            <div>
                                <input type="checkbox" disabled />
                                <label htmlFor="">
                                    Planejamento inicial
                                </label>
                            </div>
                        </div>
                    </div>
                </main>
            </section >
        </section>
    )
}