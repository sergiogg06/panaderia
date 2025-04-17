import '@/assets/home.css'
import Footer from '@/components/footer'
import ProductCarousel from '@/components/ProductCarrusel'


const HomePage = () => {
  return (
    <>
      <div className="bg-image" style={{ backgroundImage: "url('/img/fotopan.jpg')" }}>
        <div className="content">
          <h1>Bienvenido a nuestra Panadería</h1>
          <p>Descubre los mejores productos de panadería.</p>
        </div>
      </div>

      <section>
        <h2 className="text-center mt-3">Nuestros productos</h2>
        <p className="text-center mt-3">Descubre una amplia variedad de productos de panadería frescos y deliciosos.</p>
        <ProductCarousel />
        
      </section>

      <hr />

      <section className="container py-5 text-center">
        <h3 className="mb-4 display-5">Sobre nosotros</h3>
        <img src="/img/imagenbase.jpg" alt="Sobre nosotros" className="img-fluid rounded mx-auto d-block" />
        <div className="py-5">
          <h4 className="fw-bold display-6">¡Somos quienes somos!</h4>
          <h6 className="fst-italic display-6">Con pasión por la verdadera y buena panadería.</h6>
          <p className="mx-auto lead" style={{ maxWidth: "600px" }}>
            El aroma del pan recién horneado despierta los sentidos...
          </p>
        </div>
      </section>

      <hr />

      <section className="container py-5 text-center">
        <h5 className="mb-4 display-6">
          <span className="badge bg-secondary">DÓNDE ENCONTRARNOS</span>
        </h5>
        <p className="lead fs-4">Encuéntranos en alguna dirección en algún lugar.</p>
        <img src="/img/calle.jpg" className="img-fluid rounded shadow" alt="ubicación" />
        <p className="mt-3 fs-5">
          <span className="badge bg-info text-dark">FYI!</span>
          Ofrecemos servicio completo de catering...
        </p>
      </section>

      <hr />

      <section className="container py-5 text-center">
  <div className="responsive-iframe">
    <iframe
      src="https://www.youtube.com/embed/Aw73bVIv4cs?si=ZSjkk2GUoYgXu7cU"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
</section>
      
      <hr />
    </>
  )
}

export default HomePage
