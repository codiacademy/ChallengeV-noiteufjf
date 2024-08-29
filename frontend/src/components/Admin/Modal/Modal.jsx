import { Suspense } from 'react';
import { X } from 'lucide-react';

// eslint-disable-next-line react/prop-types
export default function Modal({ isModalOpen, setIsModalOpen, Component }) {
    if (!Component) {
        return null;
    }

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto z-20 ${isModalOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white p-4 rounded-md w-[50%] min-w-72 shadow-lg relative m-auto lg:m-0">
                <button onClick={() => setIsModalOpen(false)} className="absolute right-2 text-red-700">
                    <X />
                </button>
                <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                </Suspense>
            </div>
        </div>
    )
}