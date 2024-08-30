/* eslint-disable react/prop-types */

export default function UserDetail({ user }) {

    const convertDate = (date) => {
        return new Date(date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        })
    }

    return (
        <>
            <h1 className="text-2xl font-bold text-center mb-4">Detalhes do Usuário</h1>
            <div className="grid md:grid-cols-2 gap-y-4">
                <section className="space-y-2">
                    <div>
                        <h2 className="text-lg font-bold">Nome</h2>
                        <p>{user.name}</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold">Email</h2>
                        <p>{user.email}</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold">Telefone</h2>
                        <p>{user.phone}</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold">CNPJ</h2>
                        <p>{user.cnpj}</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold">Empresa</h2>
                        <p>{user.company_name}</p>
                    </div>
                </section>

                <section className="space-y-2">
                    <div>
                        <h2 className="text-lg font-bold">É admin</h2>
                        <p>{user.isAdmin ? 'Sim' : 'Não'}</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold">Quantidade de projetos</h2>
                        <p>{user.Projects.length}</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold">Criado em:</h2>
                        <p>{convertDate(user.createdAt)}</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold">Atualizado em:</h2>
                        <p>{convertDate(user.updatedAt)}</p>
                    </div>
                </section>
            </div>
        </>
    )
}