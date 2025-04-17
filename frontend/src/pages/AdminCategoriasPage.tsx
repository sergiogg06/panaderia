import { useEffect, useState } from 'react'
import { Categoria } from '@/interfaces/Categoria'
import { getCategorias } from '@/services/categoriasService'

const BACKEND_URL = 'http://localhost:8080'

const AdminCategoriasPage = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([])

  useEffect(() => {
    getCategorias()
      .then((res) => setCategorias(res.data))
      .catch((err) => console.error('Error al cargar categorías', err))
  }, [])

  return (
    <div className="container mt-4">
      <h4 className="text-center mb-4">Vista de Categorías</h4>

      {/* Botón desactivado */}
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-success" disabled>
          <i className="bi bi-plus-circle"></i> No se permiten *por ahora* más categorías jaja saludos
        </button>
      </div>

      {/* Tabla */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Tipo</th>
              <th>Imagen</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((cat) => (
              <tr key={cat.tipo}>
                <td>{cat.tipo}</td>
                <td>
                  <img
                    src={`${BACKEND_URL}${cat.imagen}`}
                    alt={cat.tipo}
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    className="rounded"
                  />
                </td>
                <td>{cat.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminCategoriasPage
