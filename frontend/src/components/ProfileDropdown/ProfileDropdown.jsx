import { useState, useEffect, useContext } from "react";
import { User2 } from 'lucide-react'
import './profiledropdown.css'
import { Link } from "react-router-dom";
import { UserContext } from "../../context/AppProvider";

export default function ProfileDropdown() {
    const [isOpen, setIsOpen] = useState(false)
    const { user, handleLogout } = useContext(UserContext)

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



    return (
        <div className="container-avatar">
            <User2
                className="avatar-img avatar"
                onClick={toggleDropdown}
                size={25}
            />
            {isOpen && (
                <div className="dropdown-menu">
                    {user.isAdmin ?
                        <>
                            <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                        </> :
                        <Link to="/clientprojects" className="dropdown-item">Meus projetos</Link>
                    }
                    <Link to="/login" className="dropdown-item" onClick={handleLogout}>Sair</Link>
                </div>
            )}
        </div>
    )
}