import api from './api'
import { Categoria } from '../interfaces/Categoria'

export const getCategorias = () => api.get<Categoria[]>('/categorias')
