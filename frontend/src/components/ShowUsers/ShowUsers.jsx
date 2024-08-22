// import './showusers.css'
import { Trash2Icon } from 'lucide-react'
import CreateUser from '../../pages/Admin/CreateUser/page'

export default function ShowUsers() {

    return (
        <div >
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold">Usuários</h1>
                <button className="rounded-md bg-purple-600 px-4 py-2 font-medium text-gray-50 transition-colors hover:bg-purple-600/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">Criar Usuário</button>
            </div>

            <main className="overflow-hidden rounded-lg border border-slate-300">
                <table className="w-full table-auto">
                    <thead className="bg-purple-600/40">
                        <tr>
                            <th className="px-4 py-3 text-left font-bold">Nome</th>
                            <th className="px-4 py-3 text-left font-bold">Email</th>
                            <th className="px-4 py-3 text-right font-bold">Ações</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-300">
                        <tr>
                            <td className="px-4 py-3 font-medium text-foreground">John Doe</td>
                            <td className="px-4 py-3 text-muted-foreground">john@example.com</td>
                            <td className="px-4 py-3 text-right font-medium">
                                <div className="flex items-center justify-end gap-2">
                                    <button className="rounded-md bg-gray-400 p-2">Editar</button>
                                    <button className="rounded-md bg-red-600 p-2"><Trash2Icon /></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 font-medium text-foreground">Jane Smith</td>
                            <td className="px-4 py-3 text-muted-foreground">jane@example.com</td>
                            <td className="px-4 py-3 text-right font-medium">
                                <div className="flex items-center justify-end gap-2">
                                    <button className="rounded-md bg-gray-400 p-2">Editar</button>
                                    <button className="rounded-md bg-red-600 p-2"><Trash2Icon /></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>

            <dialog className="mx-auto inset-y-56 p-4 rounded-md w-[60%] min-w-72">
                <CreateUser/>
            </dialog>
        </div>
    )
}