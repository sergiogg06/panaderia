import { Routes, Route } from 'react-router-dom'
import ProductosPage from '../pages/ProductosPage'
import HomePage from '@/pages/HomePage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productos" element={<ProductosPage />} />
    </Routes>
  )
}

export default AppRouter
