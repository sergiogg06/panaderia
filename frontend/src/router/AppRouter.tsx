import { Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import ProductosPage from '@/pages/ProductosPage'
import CategoriasPage from '@/pages/CategoriasPage'
import ProductosPorCategoria from '@/pages/ProductosPorCategoria'
import ContactoPage from '@/pages/ContactoPage'
import LoginPage from '@/pages/LoginPage'
import AdminPage from '@/pages/AdminPage'
import AdminProductosPage from '@/pages/AdminProductosPage'

import AdminLayout from '@/components/AdminLayout'
import AdminCategoriasPage from '@/pages/AdminCategoriasPage'

const AppRouter = () => {
  return (
    <Routes>
      {/* Público */}
      <Route path="/" element={<HomePage />} />
      <Route path="/productos" element={<ProductosPage />} />
      <Route path="/categorias" element={<CategoriasPage />} />
      <Route path="/productos/categoria/:tipo" element={<ProductosPorCategoria />} />
      <Route path="/contacto" element={<ContactoPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Admin con layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminPage />} />
        <Route path="productos" element={<AdminProductosPage />} />
        <Route path="categorias" element={<AdminCategoriasPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
