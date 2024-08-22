// import './showusers.css'
import { Trash2Icon, X } from 'lucide-react'
import CreateUser from '../CreateUser/CreateUser'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../lib/api'
import EditUser from '../EditUser/EditUser'

export default function ShowUsers() {
    const [users, setUsers] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)

    const openModal = (content, user = null) => {
        setModalContent(content)
        setSelectedUser(user)
        setIsModalOpen(true)
    }

    const fetchUsers = useCallback(() => {
        api.get('/users')
            .then(response => {
                console.log(response.data)
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error.response?.data || error.message);
            })
    }, []);

    const deleteUser = (id) => {
        const confirmChoice = confirm('Tem certeza que deseja excluir?')

        if (confirmChoice) {
            api.delete(`/users/${id}`)
                .then(response => {
                    alert(response.data)
                    fetchUsers()
                })
                .catch(error => {
                    console.error('Error deleting:', error.response?.data || error.message);
                })
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold">Usuários</h1>
                <button onClick={() => openModal('createUser')} className="rounded-md bg-purple-600 px-4 py-2 font-medium text-gray-50 transition-colors hover:bg-purple-600/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">Criar Usuário</button>
            </div>

            <main className="overflow-auto rounded-lg border border-slate-300">
                <table className="w-full table-auto">
                    <thead className="bg-purple-600/40">
                        <tr>
                            <th className="px-4 py-3 text-left font-bold">Nome</th>
                            <th className="px-4 py-3 text-left font-bold">Email</th>
                            <th className="px-4 py-3 text-left font-bold">CNPJ</th>
                            <th className="px-4 py-3 text-right font-bold">Ações</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-300">
                        {users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td className="px-4 py-3 font-medium text-foreground capitalize">{user.name}</td>
                                    <td className="px-4 py-3 text-muted-foreground">{user.email}</td>
                                    <td className="px-4 py-3 text-muted-foreground">{user.cnpj}</td>
                                    <td className="px-4 py-3 text-right font-medium">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="rounded-md bg-gray-400 p-2" onClick={() => openModal('editUser', user)}>Editar</button>
                                            <button className="rounded-md bg-red-600 p-2" onClick={() => deleteUser(user.id)}>
                                                <Trash2Icon />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </main>

            <dialog open={isModalOpen} className="mx-auto fixed inset-y-40 p-4 rounded-md w-[50%] min-w-72 shadow-lg">
                <button onClick={() => setIsModalOpen(false)}
                    className="absolute right-2 text-red-700"><X /></button>
                {modalContent === 'createUser' && <CreateUser />}
                {modalContent === 'editUser' && <EditUser user={selectedUser} />}
            </dialog>
        </div>
    )
}