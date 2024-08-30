import { useState, useMemo, useEffect, lazy } from "react";
import { Link } from "react-router-dom";
import "./showcontacts.css";
import { api } from "../../../lib/api";
import { Loader2, Trash2Icon } from "lucide-react";
import Modal from "../Modal/Modal";
const ConfirmAction = lazy(() => import("../ConfirmAction/ConfirmAction"));
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ShowContacts() {
  const [search, setSearch] = useState("");
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ContentComponent, setContentComponent] = useState(null);

  const notify = (message, type) => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    }
  };

  const openModal = (Component, props = {}) => {
    setContentComponent(() => () => <Component {...props} />);
    setIsModalOpen(true);
  };

  async function fetchContact() {
    setLoading(true);
    try {
      const response = await api.get("/contactForms");
      const data = response.data;
      setCustomers(data);
    } catch (error) {
      const errorMessage = error.response?.data.message;
      notify(errorMessage, "error");
      console.error(errorMessage || error.message);
    } finally {
      setLoading(false);
    }
  }

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      const searchValue = search.toLowerCase();
      return (
        customer.name.toLowerCase().includes(searchValue) ||
        customer.email.toLowerCase().includes(searchValue) ||
        customer.message.toLowerCase().includes(searchValue)
      );
    });
  }, [customers, search]);

  const deleteMessage = (id) => {
    openModal(ConfirmAction, {
      onConfirm: () => handleDelete(id),
      onCancel: () => setIsModalOpen(false),
    });
  };

  const handleDelete = (id) => {
    api
      .delete(`/contactForms/${id}`)
      .then((response) => {
        notify(response.data, "success");
        setIsModalOpen(false);
        fetchContact();
      })
      .catch((error) => {
        console.error(
          "Erro ao deletar:",
          error.response?.data || error.message
        );
        setIsModalOpen(false);
      });
  };

  useEffect(() => {
    fetchContact();
  }, []);

  return (
    <div>
      <div className="header-container">
        <h1 className="text-2xl font-bold">Lista de Contatos</h1>
        <div className="search-container">
          <input
            type="search"
            placeholder="Pesquisar contatos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 rounded-md border-2 border-gray-300"
          />
        </div>
      </div>
      <main className="table-container">
        {loading ? (
          <div>
            Carregando Mensagens... <Loader2 className="animate-spin" />
          </div>
        ) : filteredCustomers.length === 0 ? (
          <div className="text-center py-4">Nenhuma mensagem encontrada.</div>
        ) : (
          <table className="custom-table">
            <thead className="bg-purple-600/40">
              <tr className="custom-tr-header">
                <th className="custom-th">Nome</th>
                <th className="custom-th">Empresa</th>
                <th className="custom-th">Cargo</th>
                <th className="custom-th">Email</th>
                <th className="custom-th">Data</th>
                <th className="custom-th">Comentário</th>
                <th className="custom-th text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="custom-tbody">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="custom-tr-body">
                  <td className="font-medium custom-td capitalize">
                    {customer.name}
                  </td>
                  <td className="custom-td capitalize">
                    {customer.company_name}
                  </td>
                  <td className="custom-td capitalize">{customer.office}</td>
                  <td className="custom-td">
                    <Link
                      to={`mailto:${customer.email}`}
                      className="custom-link"
                    >
                      {customer.email}
                    </Link>
                  </td>

                  <td className="custom-td">
                    {new Date(customer.createdAt).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </td>
                  <td className="custom-td capitalize">{customer.message}</td>
                  <td className="px-4 py-3 text-right font-medium">
                    <button
                      onClick={() => deleteMessage(customer.id)}
                      aria-label={`Excluir usuário ${customer.name}`}
                    >
                      <Trash2Icon className="text-[#4f3864] hover:text-red-600 duration-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
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