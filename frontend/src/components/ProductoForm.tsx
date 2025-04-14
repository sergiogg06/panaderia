import { useEffect, useState } from 'react'
import { getCategorias } from '@/services/categoriasService'
import { createProducto } from '@/services/productosService'
import { Categoria } from '@/interfaces/Categoria'
import { ProductoCreateRequest } from '@/interfaces/ProductoCreateRequest'

const ProductoForm = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [producto, setProducto] = useState<ProductoCreateRequest>({
    nombre: '',
    categoria: '',
    descripcion: '',
    precio: 0,
    imagen: ''
  })

  useEffect(() => {
    getCategorias().then((res) => setCategorias(res.data))
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProducto({ ...producto, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createProducto(producto)
    window.location.reload()
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input className="form-control mb-2" type="text" name="nombre" placeholder="Nombre" onChange={handleChange} />
      <select className="form-control mb-2" name="categoria" onChange={handleChange}>
        <option value="">Seleccione Categoría</option>
        {categorias.map((cat) => (
          <option key={cat.tipo} value={cat.tipo}>{cat.tipo}</option>
        ))}
      </select>
      <input className="form-control mb-2" type="text" name="descripcion" placeholder="Descripción" onChange={handleChange} />
      <input className="form-control mb-2" type="number" name="precio" placeholder="Precio" onChange={handleChange} />
      <input className="form-control mb-2" type="text" name="imagen" placeholder="URL Imagen" onChange={handleChange} />
      <button className="btn btn-success">Crear Producto</button>
    </form>
  )
}

export default ProductoForm
