
// eslint-disable-next-line react/prop-types
export default function ConfirmAction({ onConfirm, onCancel }) {

    return (
        <div className="relative h-20">
            <p>
                Deseja <span className="uppercase">confirmar</span> a ação
            </p>

            <div className="absolute right-1 bottom-1 flex gap-4">
                <button onClick={onConfirm}
                    className="bg-purple-600/60 rounded-md px-3 py-1 font-bold">
                    Confirmar
                </button>
                <button onClick={onCancel}
                    className="bg-red-600/60 rounded-md px-3 py-1 font-bold">
                    Cancelar
                </button>
            </div>
        </div>
    )
}