import { useEffect, useState } from 'react'
import { getProductos } from '@/services/productosService'
import { Producto } from '@/interfaces/Producto'
import { Link } from 'react-router-dom'

const BACKEND_URL = 'http://localhost:8080'

const AdminProductosPage = () => {
  const [productos, setProductos] = useState<Producto[]>([])

  useEffect(() => {
    getProductos()
      .then((res) => setProductos(res.data))
      .catch((err) => console.error('Error al cargar productos', err))
  }, [])

  return (
    <div className="container mt-4">
      <h4 className="text-center mb-4">Administración de Productos</h4>

      {/* Botón crear producto */}
      <div className="d-flex justify-content-between mb-3">
        <Link to="/admin/productos/new" className="btn btn-success">
          <i className="bi bi-plus-circle"></i> Nuevo Producto
        </Link>
      </div>

      {/* Tabla de productos */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>{producto.categoria.tipo}</td>
                <td>
                  <img
                    src={`${BACKEND_URL}${producto.imagen}`}
                    alt={producto.nombre}
                    className="rounded-circle"
                    width="50"
                  />
                </td>
                <td>
                  <Link to={`/admin/productos/editar/${producto.id}`} className="btn btn-primary btn-sm me-2">
                    <i className="bi bi-pencil"></i> Editar
                  </Link>
                  <button className="btn btn-danger btn-sm">
                    <i className="bi bi-trash"></i> Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminProductosPage
