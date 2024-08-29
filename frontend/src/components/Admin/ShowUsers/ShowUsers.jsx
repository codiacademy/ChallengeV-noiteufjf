import { useEffect, useState, lazy, useContext } from "react";
import { LoaderPinwheelIcon, Trash2Icon } from "lucide-react";
import { FetchUsersContext } from "../../../context/AppProvider"; // Importa o contexto
import Modal from "../Modal/Modal";
import { api } from "../../../lib/api";

const CreateUser = lazy(() => import("../CreateUser/CreateUser"));
const EditUser = lazy(() => import("../EditUser/EditUser"));
const ConfirmAction = lazy(() => import("../ConfirmAction/ConfirmAction"));

export default function ShowUsers() {
  const { users, loadingUsers, errorMessage, fetchUsers } =
    useContext(FetchUsersContext); // Usa o contexto
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ContentComponent, setContentComponent] = useState(null);

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

  const handleDelete = (id) => {
    api
      .delete(`/users/${id}`)
      .then((response) => {
        const ModalContent = () => <h1>{response.data}</h1>;
        openModal(ModalContent);
        fetchUsers(); // Recarrega os usuários após a exclusão
      })
      .catch((error) => {
        console.error("Error deleting:", error.response?.data || error.message);
        setIsModalOpen(false);
      });
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetchUsers(); // Busca os usuários ao carregar o componente
  }, [fetchUsers]);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between flex-wrap">
        <h1 className="text-2xl font-bold mr-4">Lista de Usuários</h1>
        <div className="flex items-center gap-4"> 
          <input
            type="text"
            placeholder="Pesquisar usuário..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 rounded-md border-2 border-gray-300"
          />
          <button
            onClick={() => openModal(CreateUser)}
            className="rounded-md bg-purple-600 px-4 py-2 font-medium text-gray-50 transition-colors hover:bg-purple-600/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Criar Usuário
          </button>
        </div>
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
              {filteredUsers.map((user) => (
                <tr key={user.id}>
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
                        onClick={() => openModal(EditUser, user)}
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
    </div>
  );
}
