import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#b57f02' }}>
        <div className="container-fluid">
          <Link className="navbar-brand text-dark" to="/">Panadería</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active text-dark" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/productos">Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/categorias">Categoría</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/contacto">Contacto</Link>
              </li>
              {/* Simulación del login, si tenés auth lo cambiás después */}
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/admin">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
