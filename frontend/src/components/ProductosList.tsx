import { useEffect, useState } from 'react'
import { getProductos } from '@/services/productosService'
import { Producto } from '@/interfaces/Producto'

const ProductosList = () => {
  const [productos, setProductos] = useState<Producto[]>([])

  useEffect(() => {
    console.log('Montando ProductosList...')
  
    getProductos()
      .then((res) => {
        console.log('Productos obtenidos:', res.data)
        setProductos(res.data)
        console.log('Productos cargados (luego de set):', productos)
      })
      .catch((err) => console.error('Error al obtener productos', err))
  
    return () => {
      console.log('Desmontando ProductosList...')
    }
  }, [])
  

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Productos</h3>
  
      {productos.length === 0 ? (
        <div className="alert alert-warning text-center">
          No hay productos disponibles.
        </div>
      ) : (
        <div className="row">
          {productos.map((producto) => (
            <div className="col-md-4 mb-4" key={producto.id}>
              <div className="card h-100 shadow-sm">
              <img
                src={`http://localhost:8080${producto.imagen}`}
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

export default ProductosList
