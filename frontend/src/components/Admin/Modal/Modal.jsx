import { Suspense } from 'react';
import { X } from 'lucide-react';

// eslint-disable-next-line react/prop-types
export default function Modal({ isModalOpen, setIsModalOpen, Component }) {
    if (!Component) {
        return null;
    }
    
    return (
        <dialog open={isModalOpen} className="mx-auto fixed inset-y-40 p-4 rounded-md w-[50%] min-w-72 shadow-lg">
            <button onClick={() => setIsModalOpen(false)} className="absolute right-2 text-red-700">
                <X />
            </button>
            <Suspense fallback={<div>Loading...</div>}>
                <Component />
            </Suspense>
        </dialog>
    )
}