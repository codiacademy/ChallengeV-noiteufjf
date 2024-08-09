import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import './header.css'

export default function Header() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    return (
        <header>
            {/* Mobile Navbar */}
            <div className='mobile-nav-container'>
                <Link to="/" className='main-link links'>Codi Magic</Link>

                <div>
                    <button type="button" aria-label="Abrir e Fechar menu de navegação"
                        onClick={() => setMobileNavOpen(prevState => !prevState)}
                    >
                        <Menu />
                    </button>
                    <Link to="/login" className='login-link'>Login</Link>
                </div>
            </div>

            {mobileNavOpen && (
                <div>
                    <nav className='mobile-nav'>
                        <Link to="/" className='links'>Home</Link>
                        <Link to="/projects" className='links'>Projetos</Link>
                        <Link to="/team" className='links'>Equipe</Link>
                    </nav>
                </div>
            )}

            {/* Desktop Navbar */}
            <div className='desktop-nav-container'>
                <Link to="/" className='main-link links'>Codi Magic</Link>

                <nav className='desktop-nav'>
                    <Link to="/" className='links'>Home</Link>
                    <Link to="/projects" className='links'>Projetos</Link>
                    <Link to="/team" className='links'>Equipe</Link>
                    <Link to="/adm" className='links'>ADM</Link>
                    <Link to="/login" className='login-link'>Login</Link>
                </nav>
            </div>
        </header>
    )
}