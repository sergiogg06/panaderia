import api from './api'
import { Producto } from '@/interfaces/Producto'

export const getProductos = () => api.get<Producto[]>('/productos')
export const getProductosPorCategoria = (tipo: string) =>
  api.get<Producto[]>(`/productos/categoria/${tipo}`)


