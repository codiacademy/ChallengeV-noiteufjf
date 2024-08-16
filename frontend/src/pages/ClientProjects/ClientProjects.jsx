import './ClientProject.css'
import CardProject from '../../components/Card-ClientProjects/card-project'
import { SidebarOpen } from 'lucide-react'
import { useContext, useEffect, useState } from 'react';
import { api } from '../../lib/api';
import { UserContext } from '../../context/AppProvider';

export default function ClientProjects() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [userProjects, setUserProjects] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            api.get('/projects',)
                .then(response => {
                    const projects = response.data

                    const newProjects = projects.filter(project => project.userId === user.id)
                    setUserProjects(newProjects);

                })
                .catch(error => {
                    console.error(error.response.data);
                })
        }
    })

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <section style={{ marginTop: '6rem' }}>
            {user ?
                <>
                    <button id='btn-sidebar' onClick={toggleSidebar}><SidebarOpen /></button>
                    <section className="ContainerProject">
                        <aside className={`sidebar ${isSidebarVisible ? 'active' : ''}`}>
                            <div className="sidebar-projects">
                                {userProjects.map(project => (
                                    <CardProject
                                        key={project.id}
                                        projectName={project.name}
                                        onClick={() => setSelectedProject(project)}
                                    />
                                ))}
                            </div>
                        </aside>
                        <span id='linhacontent'></span>

                        <main className="content-project">
                            {selectedProject ? (
                                <>
                                    <div className="labelgraphic">
                                        <h2>{selectedProject.name}</h2>
                                        <div className="progressCircle">
                                            {/* <div className='circle'></div> */}
                                        </div>
                                        <div className="progressBar">
                                            <div className="bar"
                                                style={{ width: selectedProject.progress }}
                                                title={selectedProject.progress}
                                            >
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="etapas">
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
                                    </div> */}
                                </>
                            ) : (
                                <h1>Selecione um projeto</h1>
                            )}
                        </main>
                    </section>
                </>
                :
                <h1 style={{ textAlign: 'center', height: '80vh' }}>
                    Usuário não logado
                </h1>}

        </section>
    )
}