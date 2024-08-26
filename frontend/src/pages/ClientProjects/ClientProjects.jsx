import './ClientProject.css'
import CardProject from '../../components/Card-ClientProjects/card-project'
import { SidebarOpen } from 'lucide-react'
import { useCallback, useContext, useEffect, useState } from 'react';
import { api } from '../../lib/api';
import { UserContext } from '../../context/AppProvider';
import Chart from 'chart.js/auto';

export default function ClientProjects() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [userProjects, setUserProjects] = useState([]);
    const { user } = useContext(UserContext);

    const fetchUserProjects = useCallback(() => {
        api.get('/projects')
            .then(response => {
                const projects = response.data.filter(project => project.userId === user.id);
                setUserProjects(projects);
            })
            .catch(error => {
                console.error('Error fetching user projects:', error.response?.data || error.message);
            })
    }, [user]);

    useEffect(() => {
        if (user) {
            fetchUserProjects()
        }
    }, [user, fetchUserProjects])

    const toggleSidebar = () => {
        setIsSidebarVisible(prevState => !prevState);
    };

    useEffect(()=>{
        if (selectedProject) {
            const progressValue = parseFloat(selectedProject.progress);

            const data = {
                labels: ['Progresso', "Restante"],
                datasets: [{
                    data: [progressValue, 100 - progressValue],
                    backgroundColor: ['#4caf50', '#f3f3f3'],
                }]
            }

            const config = {
                type: 'pie',
                data: data
            };

            const ctx = document.getElementById('my-chart').getContext('2d');
            new Chart (ctx, config)
        }
    })

    return (
        <section style={{ marginTop: '6rem' }}>

            <button id='btn-sidebar' onClick={toggleSidebar}>
                <SidebarOpen />
            </button>

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
                                    <canvas id='my-chart'></canvas>
                                </div>
                                <div className="progressBar">
                                    <div className="bar"
                                        style={{ width: selectedProject.status }}
                                        title={selectedProject.status}
                                    >
                                        <h1 className="status-text">{ selectedProject.status }</h1>
                                    </div>
                                </div>
                            </div>

                        </>
                    ) : (
                        <h1>Selecione um projeto</h1>
                    )}
                </main>
            </section>

        </section>
    )
}