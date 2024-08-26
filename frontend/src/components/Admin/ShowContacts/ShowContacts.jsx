import { useState, useMemo, useEffect, Suspense, lazy } from "react"
import { Link } from 'react-router-dom'
import './showcontacts.css'
import { api } from "../../../lib/api";
import { Trash2Icon } from "lucide-react";
import Modal from "../Modal/Modal";
const ConfirmAction = lazy(() => import('../ConfirmAction/ConfirmAction'))

export default function ShowContacts() {
  const [search, setSearch] = useState("")
  const [customers, setCustomers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [ContentComponent, setContentComponent] = useState(null);

  const openModal = (Component, props = {}) => {
    // eslint-disable-next-line react/display-name
    setContentComponent(() => () => <Component {...props} />);
    setIsModalOpen(true);
  };

  async function fetchContact() {
    try {
      const response = await api.get("/contactForms");
      const data = response.data;
      setCustomers(data);
    } catch (error) {
      console.error("Erro ao buscar contatos:", error.response?.data.message);
      const ErrorMessage = () => <h1 className="text-2xl">{error.response?.data.message}</h1>;
      openModal(ErrorMessage);
    }
  }

  const filteredCustomers = useMemo(() => {
    return customers
      .filter((customer) => {
        const searchValue = search.toLowerCase()
        return (
          customer.name.toLowerCase().includes(searchValue) ||
          customer.email.toLowerCase().includes(searchValue) ||
          customer.message.toLowerCase().includes(searchValue)
        )
      })


  }, [customers, search])

  const deleteMessage = (id) => {
    openModal(ConfirmAction, {
      onConfirm: () => handleDelete(id),
      onCancel: () => setIsModalOpen(false)
    });
  }

  const handleDelete = (id) => {
    api.delete(`/contactForms/${id}`)
      .then(response => {
        const ModalContent = () => <h1>{response.data}</h1>;
        openModal(ModalContent);
        fetchContact()
      })
      .catch(error => {
        console.error('Error deleting:', error.response?.data || error.message);
        setIsModalOpen(false)
      })
  }
  useEffect(() => {
    fetchContact()
  }, [])

  return (
    <div>
      <div className="header-container">
        <h1 className="text-2xl font-bold">Lista de Contatos</h1>
        <div className="search-container">
          <input
            type="search"
            placeholder="Perquisar contatos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 rounded-md border-2 border-gray-300"
          />
        </div>
      </div>
      <main className="table-container">
        <Suspense fallback={<div>Carregando Contatos...</div>}>
          <table className="custom-table">
            <thead className="bg-purple-600/40">
              <tr className="custom-tr-header">
                <th className="custom-th">Nome</th>
                <th className="custom-th">Empresa</th>
                <th className="custom-th">Cargo</th>
                <th className="custom-th">Email</th>
                <th className="custom-th">Data</th>
                <th className="custom-th">Comentário</th>
                <th className="custom-th">Ações</th>
              </tr>
            </thead>
            <tbody className="custom-tbody">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="custom-tr-body">
                  <td className="font-medium custom-td capitalize">{customer.name}</td>
                  <td className="custom-td capitalize">{customer.company_name}</td>
                  <td className="custom-td capitalize">{customer.office}</td>
                  <td className="custom-td">
                    <Link to={`mailto:${customer.email}`} className="custom-link">
                      {customer.email}
                    </Link>
                  </td>

                  <td className="custom-td">{customer.createdAt}</td>
                  <td className="custom-td capitalize">{customer.message}</td>
                  <td className="px-4 py-3 text-right font-medium">
                    <button className="rounded-md bg-red-600 p-2"
                      onClick={() => deleteMessage(customer.id)}
                      aria-label={`Excluir usuário ${customer.name}`}
                    >
                      <Trash2Icon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Suspense>
      </main>

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        Component={ContentComponent}
      />
    </div>
  )
}