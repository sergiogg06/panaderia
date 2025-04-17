import { useEffect, useState } from 'react'
import { Categoria } from '@/interfaces/Categoria'
import { getCategorias } from '@/services/categoriasService'
import { Link } from 'react-router-dom'
import Footer from '@/components/footer'

const BACKEND_URL = 'http://localhost:8080' // podrías pasarlo a .env más adelante

const CategoriasPage = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([])

  useEffect(() => {
    getCategorias()
      .then(res => setCategorias(res.data))
      .catch(err => console.error('Error al obtener categorías', err))
  }, [])

  return (
    <><div className="container mt-4">
      <section id="servicios">
        <h2 className="mb-4 text-center">Listado de Categorías</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {categorias.map(categoria => (
            <div className="col" key={categoria.tipo}>
              <div className="card h-100 shadow-sm">
                <img
                  src={`${BACKEND_URL}${categoria.imagen}`}
                  className="card-img-top"
                  alt={categoria.tipo}
                  style={{ objectFit: 'cover', height: '200px' }} />
                <div className="card-body">
                  <h5 className="card-title">{categoria.tipo}</h5>
                  <p className="card-text">{categoria.descripcion}</p>
                </div>
                <div className="card-footer text-center">
                  <Link to={`/productos/categoria/${categoria.tipo}`} className="btn btn-primary">
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div></>
  )
}

export default CategoriasPage
