import { Routes, Route } from 'react-router-dom'
import ProductosPage from '../pages/ProductosPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductosPage />} />
    </Routes>
  )
}

export default AppRouter
