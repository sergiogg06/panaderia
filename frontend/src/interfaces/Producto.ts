import { Categoria } from './Categoria'

export interface Producto {
  id: number;
  nombre: string;
  categoria: Categoria; // <- Antes era string
  descripcion: string;
  precio: number;
  imagen: string;
}
