import { useCallback, useEffect, useState, lazy, Suspense } from 'react'
import { Trash2Icon } from 'lucide-react'
import { api } from '../../../lib/api'
import Modal from '../Modal/Modal'
const CreateUser = lazy(() => import('../CreateUser/CreateUser'))
const EditUser = lazy(() => import('../EditUser/EditUser'))
const ConfirmAction = lazy(() => import('../ConfirmAction/ConfirmAction'))

export default function ShowUsers() {
    const [users, setUsers] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [ContentComponent, setContentComponent] = useState(null);

    const openModal = (Component, user = null, props = {}) => {
        // eslint-disable-next-line react/display-name
        setContentComponent(() => () => <Component user={user} {...props} />);
        setIsModalOpen(true);
    };

    const fetchUsers = useCallback(() => {
        api.get('/users')
            .then(response => {
                
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error.response?.data || error.message);
                setErrorMessage(`Error fetching users: ${error.response?.data || error.message}`)
            })
    }, []);

    const deleteUser = (id) => {
        openModal(ConfirmAction, null, {
            onConfirm: () => handleDelete(id),
            onCancel: () => setIsModalOpen(false)
        });
    }

    const handleDelete = (id) => {
        api.delete(`/users/${id}`)
            .then(response => {
                const ModalContent = () => <h1>{response.data}</h1>;
                openModal(ModalContent);
                fetchUsers()
            })
            .catch(error => {
                console.error('Error deleting:', error.response?.data || error.message);
                setIsModalOpen(false)
            })
    }

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold">Lista de Usuários</h1>
                <button onClick={() => openModal(CreateUser)} className="rounded-md bg-purple-600 px-4 py-2 font-medium text-gray-50 transition-colors hover:bg-purple-600/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">Criar Usuário</button>
            </div>

            <main className="overflow-auto rounded-lg border border-slate-300">
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
                        {users.map((user) => {
                            return (
                                <Suspense key={user.id} fallback={<tr><td colSpan="4">Loading...</td></tr>}>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-foreground capitalize">{user.name}</td>
                                        <td className="px-4 py-3 text-muted-foreground">{user.email}</td>
                                        <td className="px-4 py-3 text-muted-foreground">{user.cnpj}</td>
                                        <td className="px-4 py-3 text-muted-foreground capitalize">{JSON.stringify(user.isAdmin)}</td>
                                        <td className="px-4 py-3 text-right font-medium">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="rounded-md p-2 text-[#4f3864] hover:text-[#757575] duration-500" onClick={() => openModal(EditUser, user)}>Editar</button>
                                                <button className="rounded-md" 
                                                onClick={() => deleteUser(user.id)}
                                                aria-label={`Excluir usuário ${user.name}`}
                                                >
                                                    <Trash2Icon className="text-[#4f3864] hover:text-red-600 duration-500"/>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </Suspense>
                            )
                        })}
                    </tbody>
                </table>
                {errorMessage && (
                    <h3 className="mt-4 text-red-600">
                        {errorMessage}
                    </h3>
                )}
            </main>

            <Modal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                Component={ContentComponent}
            />
        </div>
    )
}