
import { useState, useMemo, useEffect } from "react"
import { Link } from 'react-router-dom'
import './AdmPage.css'
import { api } from "../../lib/api"







export default function Component() {
  const [search, setSearch] = useState("")
  const [customers, setCustomers] = useState([]);

  async function fetchContact() {

    const response = await api.get("/contactForms")

    const data = await response.data;

    setCustomers(data)
  }
  console.log(customers)

  const filteredCustomers = useMemo(() => {
    return customers
      .filter((customer) => {
        const searchValue = search.toLowerCase()
        return (
          customer.name.toLowerCase().includes(searchValue) ||
          customer.email.toLowerCase().includes(searchValue) ||
          customer.inquiry.toLowerCase().includes(searchValue)
        )
      })


  }, [customers, search])

  useEffect(()=> {
        fetchContact()
  },
  [])

  return (
    <div className="container">
      <main className="main-content">
        <div className="header-container">
          <h1 className="title">Lista de Contatos</h1>
          <div className="search-container">
            <input
              type="search"
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-xs"
            />
          </div>
        </div>
        <div className="table-container">
          <table className="custom-table">
            <thead className="custom-thead">
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
                    <Link href="#" className="custom-link" prefetch={false}>
                      {customer.email}
                    </Link>
                  </td>
                  
                  <td className="custom-td">{customer.createdAt}</td>
                  <td className="custom-td text-muted-foreground">{customer.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}