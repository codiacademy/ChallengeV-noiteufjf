import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/solid'
import './header.css'

export default function Header() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    return (
        <header>
            {/* Mobile Navbar */}
            <div className='mobile-nav-container'>
                <Link to="/" className='main-link'>Codi Magic</Link>

                <div>
                    <button type="button" aria-label="Abrir e Fechar menu de navegação"
                        onClick={() => setMobileNavOpen(prevState => !prevState)}
                    >
                        <Bars3Icon style={{width: '25px'}}/>
                    </button>
                    <Link id='login-link'>Login</Link>
                </div>
            </div>

            {mobileNavOpen && (
                <div>
                    <nav className='mobile-nav'>
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projetos</Link>
                        <Link to="/team">Equipe</Link>
                    </nav>
                </div>
            )}

            {/* Desktop Navbar */}
            <div className='desktop-nav-container'>
                <Link to="/" className='main-link'>Codi Magic</Link>

                <nav className='desktop-nav'>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projetos</Link>
                    <Link to="/team">Equipe</Link>
                    <Link id='login-link'>Login</Link>
                </nav>
            </div>
        </header>
    )
}