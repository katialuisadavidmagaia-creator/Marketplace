
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, BookOpen, PlusCircle, LogOut, User } from 'lucide-react'
import { useCarrinho } from '../context/CarrinhoContext'
import './Navbar.css'

function Navbar() {
  const { quantidade } = useCarrinho()
  const navigate = useNavigate()
  const usuario  = JSON.parse(localStorage.getItem('usuario'))

  function logout() {
    localStorage.removeItem('usuario')
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner container">

        <Link to="/" className="navbar-logo">
          <span className="logo-icon"></span>
          <span className="logo-texto">VersoMarket</span>
        </Link>

        <div className="navbar-links">
          <Link to="/explorar" className="nav-link">
            <BookOpen size={16} /> Explorar
          </Link>
          {usuario && (
            <Link to="/publicar" className="nav-link">
              <PlusCircle size={16} /> Publicar
            </Link>
          )}
        </div>

        <div className="navbar-acoes">
          <Link to="/carrinho" className="btn-carrinho">
            <ShoppingCart size={18} />
            {quantidade > 0 && <span className="carrinho-badge">{quantidade}</span>}
          </Link>

          {usuario ? (
            <div className="navbar-usuario">
              <Link to="/perfil" className="avatar-btn">
                <User size={16} /> {usuario.nome.split(' ')[0]}
              </Link>
              <button className="btn-ghost" onClick={logout}>
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <Link to="/auth" className="btn-primary">Entrar</Link>
          )}
        </div>

      </div>
    </nav>
  )
}

export default Navbar