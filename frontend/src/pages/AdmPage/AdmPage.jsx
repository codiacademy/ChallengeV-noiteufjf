
import { useState, useMemo } from "react"
import { Link } from 'react-router-dom'
import './AdmPage.css'



export default function Component() {
  const [search, setSearch] = useState("")
  const [customers] = useState([
    {
      id: 1,
      name: "Bruce Wane",
      email: "Wane@example.com",
      empresa: "Wane Enterprise",
      cargo:"CEO",
      date: "2023-06-23",
      inquiry: "Inquiry about product featureempresa",
    },
    {
      id: 2,
      name: "Liam Neeson",
      email: "liam@example.com",
      empresa: "98.765.432/0001-01",
      cargo:"ra's al ghul",
      date: "2023-06-24",
      inquiry: "Feedback on website design",
    },
    {
      id: 3,
      name: "Charle Brown",
      email: "Brown@example.com",
      empresa: "11.222.333/0001-45",
      cargo:"skatista",
      date: "2023-06-25",
      inquiry: "Question about shipping policy",
    },
    {
      id: 4,
      name: "Roby Williams",
      email: "Roby@example.com",
      empresa: "22.333.444/0001-56",
      cargo:"Ator",
      date: "2023-06-26",
      inquiry: "Issue with order processing",
    },
    {
      id: 5,
      name: "Matt Murdock",
      email: "nelsonemurdock.adivocacia@example.com",
      empresa: "33.444.555/0001-67",
      cargo:"Demolidor",
      date: "2023-06-27",
      inquiry: "Feedback on customer support",
    },
  ])
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
                        <td className="custom-td text-muted-foreground">{customer.empresa}</td>
                        <td className="custom-td text-muted-foreground">{customer.cargo}</td>
                        <td className="custom-td">
                        <Link href="#" className="custom-link" prefetch={false}>
                            {customer.email}
                        </Link>
                        </td>
                        <td className="custom-td">{customer.date}</td>
                        <td className="custom-td text-muted-foreground">{customer.inquiry}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </main>
    </div>
  )
}