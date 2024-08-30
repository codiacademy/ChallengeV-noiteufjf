import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import "./header.css";
import { UserContext } from "../../context/AppProvider";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import LogoMagicRoxa from "../../img/LogoMagic2.png";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <header>
      {/* Mobile Navbar */}
      <div className="mobile-nav-container">
        <Link to="/" className="main-link ">
          <img src={LogoMagicRoxa} alt="" className="logo-link" />
        </Link>

        <div>
          <button
            type="button"
            aria-label="Abrir e Fechar menu de navegação"
            onClick={() => setMobileNavOpen((prevState) => !prevState)}
          >
            <Menu />
          </button>
          {user ? (
            <>
              <span>Bem-vindo, {user.name}!</span>
              <ProfileDropdown />
            </>
          ) : (
            <Link to="/login" className="login-link">
              Login
            </Link>
          )}
        </div>
      </div>

      {mobileNavOpen && (
        <div>
          <nav className="mobile-nav">
            <Link to="/" className="links">
              Home
            </Link>
            <Link to="/projects" className="links">
              Projetos
            </Link>
            <Link to="/team" className="links">
              Equipe
            </Link>
          </nav>
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="desktop-nav-container">
        <Link to="/" className="main-link ">
          <img src={LogoMagicRoxa} alt="" className="logo-link" />
        </Link>

        <nav className="desktop-nav">
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/projects" className="links">
            Projetos
          </Link>
          <Link to="/team" className="links">
            Equipe
          </Link>
          {user ? (
            <>
              <div className="spam-bemvindo">
                <span>Bem-vindo, </span>
                <p className="nomeUsuario-header">{user.name}</p>!
              </div>
              <ProfileDropdown />
            </>
          ) : (
            <Link to="/login" className="login-link">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
