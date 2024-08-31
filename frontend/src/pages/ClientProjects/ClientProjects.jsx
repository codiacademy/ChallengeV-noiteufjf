import './ClientProject.css'
import CardProject from '../../components/Card-ClientProjects/card-project'
import { Menu } from 'lucide-react'
import { useCallback, useContext, useEffect, useState } from 'react';
import { api } from '../../lib/api';
import { UserContext } from '../../context/AppProvider';
import Chart from 'chart.js/auto';
import { createChart } from './utils/chartUtils';

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



    useEffect(() => {
        if (selectedProject) {
            const progressValue = parseFloat(selectedProject.progress);
            const ctx = document.getElementById('my-chart').getContext('2d')

            if (Chart.ctx) {
                Chart.ctx.destroy();
            }

            const chart = createChart(ctx, progressValue);

            Chart.ctx = chart;
        }
    })

    return (
        <section style={{ marginTop: '6rem' }}>

            <button id='btn-sidebar' onClick={toggleSidebar}>
                <Menu />
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

                        {/* <CardProject
                            projectName={'tgtg'}
                        // onClick={() => setSelectedProject(project)}
                        /> */}

                    </div>
                </aside>


                <main className="content-project">
                    {selectedProject ? (
                        <>
                            <div className="labelgraphic">
                                {(() => {
                                
                                    console.log(selectedProject)
                                    return (
                                        <>
                                            <h2>{selectedProject.name}</h2>
                                            <div className='progressCircle'>
                                                <canvas id="my-chart"></canvas>
                                            </div>
                                            <div className="progressBar">
                                                <div
                                                    className="bar"
                                                    style={{ width: `${selectedProject.progress}%` }}
                                                    title={selectedProject.status}
                                                >
                                                    <h1 className="status-text">{selectedProject.status}</h1>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })()}
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
