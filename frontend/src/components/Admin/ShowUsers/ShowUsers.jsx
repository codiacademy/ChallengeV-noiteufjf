import { useEffect, useState, lazy, useContext } from "react";
import { LoaderPinwheelIcon, Trash2Icon } from "lucide-react";
import { FetchUsersContext } from "../../../context/AppProvider";
import Modal from "../Modal/Modal";
import { api } from "../../../lib/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateUser = lazy(() => import("../CreateUser/CreateUser"));
const EditUser = lazy(() => import("../EditUser/EditUser"));
const ConfirmAction = lazy(() => import("../ConfirmAction/ConfirmAction"));

export default function ShowUsers() {
  const { users, loadingUsers, errorMessage, fetchUsers } =
    useContext(FetchUsersContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ContentComponent, setContentComponent] = useState(null);

  const notify = (message, type) => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    }
  };

  const openModal = (Component, user = null, props = {}) => {
    // eslint-disable-next-line react/display-name
    setContentComponent(() => () => <Component user={user} {...props} />);
    setIsModalOpen(true);
  };

  const deleteUser = (id) => {
    openModal(ConfirmAction, null, {
      onConfirm: () => handleDelete(id),
      onCancel: () => setIsModalOpen(false),
    });
  };

  const handleEditUser = (user) => {
    openModal(EditUser, user, { closeModal: () => setIsModalOpen(false) })
  }

  const handleDelete = (id) => {
    api
      .delete(`/users/${id}`)
      .then((response) => {
        notify(response.data, "success");
        setIsModalOpen(false);
        fetchUsers();
      })
      .catch((error) => {
        const errorMessage = error.response?.data.message || error.message;
        notify(errorMessage, "error");
        setIsModalOpen(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Usuários</h1>
        <button
          onClick={() => openModal(CreateUser)}
          className="rounded-md bg-purple-600 px-4 py-2 font-medium text-gray-50 transition-colors hover:bg-purple-600/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Criar Usuário
        </button>
      </div>

      <main className="overflow-auto rounded-lg border border-slate-300">
        {loadingUsers ? (
          <div>
            Carregando usuários...{" "}
            <LoaderPinwheelIcon className="animate-spin inline" />
          </div>
        ) : (
          <table className="w-full table-auto">
            <thead className="bg-purple-600/40">
              <tr>
                <th className="px-4 py-3 text-left font-bold">Nome</th>
                <th className="px-4 py-3 text-left font-bold">Email</th>
                <th className="px-4 py-3 text-left font-bold">CNPJ</th>
                <th className="px-4 py-3 text-left font-bold">Admin</th>
                <th className="px-4 py-3 text-right font-bold">Ações</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-300">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-[#f3f4f6] transition-colors duration-200">
                  <td className="px-4 py-3 font-medium text-foreground capitalize">
                    {user.name}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {user.email}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {user.cnpj}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground capitalize">
                    {JSON.stringify(user.isAdmin)}
                  </td>
                  <td className="px-4 py-3 text-right font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        className="rounded-md p-2 text-[#4f3864] hover:text-[#757575] duration-500"
                        onClick={() => handleEditUser(user)}
                      >
                        Editar
                      </button>
                      <button
                        className="rounded-md"
                        onClick={() => deleteUser(user.id)}
                        aria-label={`Excluir usuário ${user.name}`}
                      >
                        <Trash2Icon className="text-[#4f3864] hover:text-red-600 duration-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {errorMessage && <h3 className="mt-4 text-red-600">{errorMessage}</h3>}
      </main>

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        Component={ContentComponent}
      />

      <ToastContainer/>
    </div>
  );
}
