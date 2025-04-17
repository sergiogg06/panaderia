import { Link, Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: '250px' }}>
        <h4 className="text-center mb-4">Admin</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/admin" className="nav-link text-white">
              <i className="bi bi-house-door-fill me-2" /> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/productos" className="nav-link text-white">
              <i className="bi bi-box-seam me-2" /> Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/categorias" className="nav-link text-white">
              <i className="bi bi-tags me-2" /> Categorías
            </Link>
          </li>
          <li className="nav-item mt-3">
            <button
              onClick={() => {
                localStorage.removeItem('usuario')
                window.location.href = '/login'
              }}
              className="btn btn-outline-light w-100"
            >
              <i className="bi bi-box-arrow-right me-2" /> Cerrar sesión
            </button>
          </li>
        </ul>
      </div>

      {/* Contenido principal */}
      <div className="flex-grow-1 p-4 bg-light">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
