import './ClientProject.css'
import CardProject from '../../components/Card-ClientProjects/card-project'
import { SidebarOpen } from 'lucide-react'
import { useState } from 'react';

export default function ClientProjects() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [loggedInUser] = useState("user2");

    const usersData = {
        "user1": {
            projects: {
                "Site": {
                    title: "Site",
                    status: "80%",
                    stages: [
                        { label: "Etapa 1", checked: true },
                        { label: "Etapa 2", checked: true },
                        { label: "Etapa 3", checked: false },
                    ],
                },
                "App": {
                    title: "App",
                    status: "65%",
                    stages: [
                        { label: "Etapa A", checked: true },
                        { label: "Etapa B", checked: true },
                        { label: "Etapa C", checked: false },
                    ],
                }
            }
        },
        "user2": {
            projects: {
                "Site de delivery": {
                    title: "Site de delivery",
                    status: "30%",
                    stages: [
                        { label: "Etapa X", checked: true },
                        { label: "Etapa Y", checked: true },
                        { label: "Etapa Z", checked: false },
                    ],
                },
                "e-commerce": {
                    title: "e-commerce",
                    status: "40%",
                    stages: [
                        { label: "Etapa Q", checked: true },
                        { label: "Etapa R", checked: true },
                        { label: "Etapa S", checked: false },
                    ],
                }
            }
        }
    };

    const userProjects = usersData[loggedInUser]?.projects || {};

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <section style={{ marginTop: '6rem' }}>
            <button id='btn-sidebar' onClick={toggleSidebar}><SidebarOpen /></button>
            <section className="ContainerProject">
                <aside className={`sidebar ${isSidebarVisible ? 'active' : ''}`}>
                    <div className="sidebar-projects">
                        {Object.keys(userProjects).map(projectName => (
                            <CardProject key={projectName} projectName={projectName} onClick={setSelectedProject} />
                        ))}
                    </div>
                </aside>
                <span id='linhacontent'></span>

                <main className="content-project">
                    {selectedProject && userProjects[selectedProject] ? (
                        <>
                            <div className="labelgraphic">
                                <h2>{userProjects[selectedProject].title}</h2>
                                <div className="progressCircle">
                                    {/* <div className='circle'></div> */}
                                </div>
                                <div className="progressBar">
                                    <div className="bar"
                                        style={{ width: userProjects[selectedProject].status }}
                                        title={userProjects[selectedProject].status}
                                    >
                                    </div>
                                </div>
                            </div>

                            <div className="etapas">
                                <div className="checktext">
                                    <h2>Etapas Concluidas</h2>
                                    {userProjects[selectedProject].stages
                                        .filter(stage => stage.checked)
                                        .map((stage, index) => (
                                            <div key={index}>
                                                <input type="checkbox" disabled checked={stage.checked} />
                                                <label>{stage.label}</label>
                                            </div>
                                        ))}
                                </div>

                                <span id='linhatext'></span>

                                <div className="checktext">
                                    <h2>Próximas Etapas</h2>
                                    {userProjects[selectedProject].stages
                                        .filter(stage => !stage.checked)
                                        .map((stage, index) => (
                                            <div key={index}>
                                                <input type="checkbox" disabled />
                                                <label>{stage.label}</label>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <h1>Selecione um projeto</h1>
                    )}
                </main>
            </section >
        </section>
    )
}