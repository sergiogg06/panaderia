import { useEffect, useState } from 'react'

const AdminPage = () => {
  const user = JSON.parse(localStorage.getItem('usuario') || '{}')

  if (user.rol !== 'ADMIN') {
    return <div className="text-center mt-5 text-danger">Acceso denegado</div>
  }

  const [totalProductos, setTotalProductos] = useState(0)
  const [totalCategorias, setTotalCategorias] = useState(0)

  useEffect(() => {
    // Simulación de datos — reemplazar con peticiones reales si querés
    setTotalProductos(50)
    setTotalCategorias(4)
  }, [])

  return (
    <div className="container mt-4">
      <h1 className="text-center">Bienvenido al Panel de Administración</h1>
      <p className="text-center">Aquí puedes gestionar tus productos, categorías y más.</p>

      <div className="alert alert-info" role="alert">
        <strong>Hola</strong>, utiliza las opciones del menú para administrar productos, categorías y más.
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card text-white bg-primary">
            <div className="card-body">
              <h5 className="card-title">Total de Productos</h5>
              <p className="card-text">{totalProductos} productos en total.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-white bg-success">
            <div className="card-body">
              <h5 className="card-title">Categorías</h5>
              <p className="card-text">{totalCategorias} categorías disponibles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
