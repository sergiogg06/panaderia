import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductosPorCategoria } from '@/services/productosService'
import { Producto } from '@/interfaces/Producto'
import Footer from '@/components/footer'

const BACKEND_URL = 'http://localhost:8080'

const ProductosPorCategoria = () => {
  const { tipo } = useParams()
  const [productos, setProductos] = useState<Producto[]>([])

  useEffect(() => {
    if (tipo) {
      getProductosPorCategoria(tipo)
        .then((res) => setProductos(res.data))
        .catch((err) => console.error('Error al filtrar productos', err))
    }
  }, [tipo])

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Productos en la categoría: {tipo}</h2>
      {productos.length === 0 ? (
        <p className="text-center">No hay productos en esta categoría.</p>
      ) : (
        <div className="row">
          {productos.map((producto) => (
            <div className="col-md-4 mb-4" key={producto.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={`${BACKEND_URL}${producto.imagen}`}
                  className="card-img-top"
                  alt={producto.nombre}
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{producto.categoria.tipo}</h6>
                  <p className="card-text">{producto.descripcion}</p>
                </div>
                <div className="card-footer text-end">
                  <span className="fw-bold text-success">
                    ${producto.precio.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductosPorCategoria
