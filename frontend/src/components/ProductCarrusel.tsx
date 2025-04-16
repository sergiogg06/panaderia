import { useEffect, useRef } from "react";
import 'bootstrap/js/dist/carousel';
import { Carousel } from 'bootstrap';
import '../assets/home.css'; // Luego cargamos tus estilos personalizados

const ProductCarousel = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carouselRef.current) {
            new Carousel(carouselRef.current, {
                interval: 3000,
                ride: 'carousel',
            });
        }
    }, []);

    return (
        <div className="container mt-5">
            <div id="productCarousel" className="carousel slide" data-bs-ride="carousel" ref={carouselRef}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/img/productos/dulces/dulce9.jpeg" className="d-block mx-auto w-50" alt="Dulces" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Dulces</h3>
                            <p>Deliciosos dulces para satisfacer tu antojo.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/productos/pan/pan49.jpeg" className="d-block mx-auto w-50" alt="Pan" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Pan</h3>
                            <p>Pan fresco y crujiente, recién horneado.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/productos/salado/salado37.jpeg" className="d-block mx-auto w-50" alt="Salado" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Salado</h3>
                            <p>Aperitivos salados para disfrutar en cualquier momento.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/productos/mixto/mixto43.jpeg" className="d-block mx-auto w-50" alt="Mixto" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Mixto</h3>
                            <p>Una mezcla perfecta de sabores para cada ocasión.</p>
                        </div>
                    </div>
                </div>

                {/* Botones del carrusel */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#productCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#productCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

                {/* Indicadores de carrusel */}
                <div className="carousel-indicators">
                    {[0, 1, 2, 3].map((idx) => (
                        <button
                            key={idx}
                            type="button"
                            data-bs-target="#productCarousel"
                            data-bs-slide-to={idx}
                            className={idx === 0 ? "active" : ""}
                            aria-current={idx === 0 ? "true" : undefined}
                            aria-label={`Slide ${idx + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCarousel;
