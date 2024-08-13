import { useState, useEffect } from "react";
import { User2 } from 'lucide-react'
import './profiledropdown.css'

export default function ProfileDropdown() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.dropdown-menu') && !event.target.closest('.avatar')) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const handleLogout = async () => {
        alert('Logout')
    }

    return (
        <div className="container-avatar">
            <User2
                className="avatar-img avatar"
                onClick={toggleDropdown}
                size={25}
            />
            {isOpen && (
                <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">Meus projetos</a>
                    <a href="#" className="dropdown-item" onClick={handleLogout}>Sair</a>
                </div>
            )}
        </div>
    )
}