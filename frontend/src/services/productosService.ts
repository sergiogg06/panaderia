import api from './api'
import { Producto} from '@/interfaces/Producto'
import { ProductoCreateRequest } from '@/interfaces/ProductoCreateRequest'

export const getProductos = () => api.get<Producto[]>('/productos')

export const createProducto = (producto: ProductoCreateRequest) =>
  api.post('/productos', producto)
