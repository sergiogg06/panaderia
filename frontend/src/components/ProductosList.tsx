import { useEffect, useState } from 'react'
import { getProductos } from '../services/productosService'
import { Producto } from '../interfaces/Producto'

const ProductosList = () => {
  const [productos, setProductos] = useState<Producto[]>([])

  useEffect(() => {
    getProductos().then((res) => setProductos(res.data))
  }, [])

  return (
    <table className="table table-striped mt-4">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Categoría</th>
          <th>Descripción</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((p) => (
          <tr key={p.id}>
            <td>{p.nombre}</td>
            <td>{p.categoria}</td>
            <td>{p.descripcion}</td>
            <td>${p.precio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProductosList
