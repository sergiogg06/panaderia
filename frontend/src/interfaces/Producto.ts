export interface Producto {
    id: number;             // PK
    nombre: string;
    categoria: string;      // FK -> Categoria.tipo
    descripcion: string;
    precio: number;
    imagen: string;
  }
  