
import { useState, useMemo } from "react"
import { Link } from 'react-router-dom'
import './AdmPage.css'



export default function Component() {
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState({ key: "name", order: "asc" })
  const [customers, setCustomers] = useState([
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

function ListOrderedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}