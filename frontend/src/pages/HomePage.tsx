import '@/assets/home.css'

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

        <div className="container mt-5">
          <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/img/productos/dulces/dulce9.jpeg" className="d-block mx-auto" alt="Dulces" />
                <div className="carousel-caption d-none d-md-block">
                  <h3>Dulces</h3>
                  <p>Deliciosos dulces para satisfacer tu antojo.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src="/img/productos/pan/pan49.jpeg" className="d-block mx-auto" alt="Pan" />
                <div className="carousel-caption d-none d-md-block">
                  <h3>Pan</h3>
                  <p>Pan fresco y crujiente, recién horneado.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src="/img/productos/salado/salado37.jpeg" className="d-block mx-auto" alt="Salado" />
                <div className="carousel-caption d-none d-md-block">
                  <h3>Salado</h3>
                  <p>Aperitivos salados para disfrutar en cualquier momento.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src="/img/productos/mixto/mixto43.jpeg" className="d-block mx-auto" alt="Mixto" />
                <div className="carousel-caption d-none d-md-block">
                  <h3>Mixto</h3>
                  <p>Una mezcla perfecta de sabores para cada ocasión.</p>
                </div>
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </button>

            <div className="carousel-indicators">
              {[0,1,2,3].map(idx => (
                <button key={idx} type="button" data-bs-target="#productCarousel" data-bs-slide-to={idx} className={idx===0 ? "active" : ""} aria-current={idx===0 ? "true" : undefined} aria-label={`Slide ${idx+1}`}></button>
              ))}
            </div>
          </div>
        </div>
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
