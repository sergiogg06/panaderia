import ProductoForm from '../components/ProductoForm'
import ProductosList from '../components/ProductosList'

const ProductosPage = () => {
  return (
    <div className="container mt-4">
      <h2>Productos</h2>
      <ProductoForm />
      <ProductosList />
    </div>
  )
}

export default ProductosPage
