import { Routes, Route } from 'react-router-dom'
import ProductosPage from '../pages/ProductosPage'
import HomePage from '@/pages/HomePage'
import CategoriasPage from '@/pages/CategoriasPage'
import ProductosPorCategoria from '@/pages/ProductosPorCategoria'


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productos" element={<ProductosPage />} />
      <Route path="/categorias" element={<CategoriasPage />} />
      <Route path="/productos/categoria/:tipo" element={<ProductosPorCategoria />} />
    </Routes>
  )
}

export default AppRouter
