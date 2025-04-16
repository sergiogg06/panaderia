import api from './api'
import { Producto } from '@/interfaces/Producto'

export const getProductos = () => api.get<Producto[]>('/productos')

