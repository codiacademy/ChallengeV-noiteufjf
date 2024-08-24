import { useState, useMemo, useEffect, Suspense, } from "react"
import { Link } from 'react-router-dom'
import './showcontacts.css'
import { api } from "../../../lib/api";

export default function ShowContacts() {
  const [search, setSearch] = useState("")
  const [customers, setCustomers] = useState([]);

  async function fetchContact() {
    try {
      const response = await api.get("/contactForms");
      const data = response.data;
      setCustomers(data);
    } catch (error) {
      console.error("Erro ao buscar contatos:", error.response?.data.message);
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
      <div className="table-container">
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
              </tr>
            </thead>
            <tbody className="custom-tbody">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="custom-tr-body">
                  <td className="font-medium custom-td">{customer.name}</td>
                  <td className="custom-td text-muted-foreground">{customer.company_name}</td>
                  <td className="custom-td text-muted-foreground">{customer.office}</td>
                  <td className="custom-td">
                    <Link href="#" className="custom-link">
                      {customer.email}
                    </Link>
                  </td>

                  <td className="custom-td">{customer.createdAt}</td>
                  <td className="custom-td text-muted-foreground">{customer.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Suspense>
      </div>
    </div>
  )
}