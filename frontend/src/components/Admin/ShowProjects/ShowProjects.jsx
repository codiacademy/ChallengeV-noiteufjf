import { useEffect, useState, lazy, Suspense, useContext } from "react";
import { Trash2Icon } from "lucide-react";
import { api } from "../../../lib/api";
import Modal from "../Modal/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ManageUsersContext } from "../../../context/AppProvider";

const EditProjects = lazy(() => import("../EditProjects/EditProjects"));
const ConfirmAction = lazy(() => import("../ConfirmAction/ConfirmAction"));
const CreateProject = lazy(() => import("../CreateProject/CreateProjects"));

export default function ShowProjects() {
  // const [users, setUsers] = useState([]);
  // const [projects, setProjects] = useState([]);
  const { users, projects, fetchProjects, fetchUsers } = useContext(ManageUsersContext)
  // const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ContentComponent, setContentComponent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const notify = (message, type) => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    }
  };

  const openModal = (Component, project = null, props = {}) => {
    // eslint-disable-next-line react/display-name
    setContentComponent(() => () => <Component project={project} {...props} />);
    setIsModalOpen(true);
  };

  const handleEditProject = (project) => {
    openModal(EditProjects, project, { closeModal: () => setIsModalOpen(false) })
  }

  const handleCreateProject = () => {
    openModal(CreateProject, null, { closeModal: () => setIsModalOpen(false) })
  }

  // const fetchUsers = useCallback(() => {
  //   api
  //     .get("/users")
  //     .then((response) => {

  //       setUsers(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(
  //         "Error fetching users:",
  //         error.response?.data || error.message
  //       );
  //       setErrorMessage(
  //         `Error fetching users: ${error.response?.data || error.message}`
  //       );
  //     });
  // }, []);

  // const fetchProjects = useCallback(() => {
  //   api.get("/projects")
  //     .then((response) => {
  //       ;
  //       setProjects(response.data);
  //     })
  //     .catch((error) => {
  //       setErrorMessage(
  //         `Error fetching projects: ${error.response?.data || error.message}`
  //       );
  //       notify(error.response?.data || error.message, "error");
  //     });
  // }, []);

  const deleteUser = (id) => {
    openModal(ConfirmAction, null, {
      onConfirm: () => handleDelete(id),
      onCancel: () => setIsModalOpen(false),
    });
  };

  const handleDelete = (id) => {
    api
      .delete(`/projects/${id}`)
      .then((response) => {
        notify(response.data, "success");
        setIsModalOpen(false);
        fetchProjects();
      })
      .catch((error) => {
        console.error("Error deleting:", error.response?.data || error.message);
        setIsModalOpen(false);
      });
  };

  const getUserNameById = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown User";
  };

  useEffect(() => {
    fetchUsers();
    fetchProjects();
  }, [fetchUsers, fetchProjects]);

  const filteredProjects = projects.filter((project) =>
    getUserNameById(project.userId)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-4 flex items-center justify-between flex-wrap">
        <h1 className="text-2xl font-bold">Lista de Projetos</h1>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Pesquisar por projeto..."
            className="rounded-md border border-gray-300 px-4 py-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleCreateProject}
            className="rounded-md bg-purple-600 px-4 py-2 font-medium text-gray-50 transition-colors hover:bg-purple-600/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Criar Projeto
          </button>
        </div>
      </div>

      <main className="overflow-auto rounded-lg border border-slate-300">
        <table className="w-full table-auto">
          <thead className="bg-purple-600/40">
            <tr>
              <th className="px-4 py-3 text-left font-bold">User</th>
              <th className="px-4 py-3 text-left font-bold">Projetos</th>
              <th className="px-4 py-3 text-left font-bold">Status</th>
              <th className="px-4 py-3 text-right font-bold">Ações</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-300">
            {filteredProjects.map((project) => (
              <Suspense
                key={project.id}
                fallback={
                  <tr>
                    <td colSpan="4">Loading...</td>
                  </tr>
                }
              >
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground capitalize">
                    {getUserNameById(project.userId)}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {project.name}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {project.status}
                  </td>
                  <td className="px-4 py-3 text-right font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        className="rounded-md p-2 text-[#4f3864] hover:text-[#757575] duration-500"
                        onClick={() => handleEditProject(project)}
                      >
                        Editar
                      </button>
                      <button
                        className="rounded-md"
                        onClick={() => deleteUser(project.id)}
                        aria-label={`Excluir usuário ${project.name}`}
                      >
                        <Trash2Icon className="text-[#4f3864] hover:text-red-600 duration-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              </Suspense>
            ))}
          </tbody>
        </table>
        {/* {errorMessage && <h3 className="mt-4 text-red-600">{errorMessage}</h3>} */}
      </main>

      <ToastContainer />

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        Component={ContentComponent}
      />
    </div>
  );
}
