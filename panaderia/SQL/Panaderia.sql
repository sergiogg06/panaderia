-- Tabla categoria (padre)
create table categoria (
    tipo varchar(50) PRIMARY KEY,  -- <- ahora es UNIQUE
    descripcion varchar(100),
    imagen varchar(255)
);


-- Tabla productos (hija)
CREATE TABLE productos ( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    categoria VARCHAR(50),
    descripcion VARCHAR(100),
    precio DECIMAL(10,2) NOT NULL,
    imagen VARCHAR(255),
    FOREIGN KEY (categoria) REFERENCES categoria(tipo)
) AUTO_INCREMENT=56;

INSERT INTO categoria (tipo, descripcion, imagen) VALUES
('Dulce', 'Productos de sabor dulce', '/img/categorias/dulces.jpeg'),
('Salado', 'Productos de sabor salado', '/img/categorias/salado.jpeg'),
('Mixto', 'Productos que combinan dulce y salado', '/img/categorias/mixto.jpeg'),
('Pan', 'Todo tipo de panes', '/img/categorias/pan.jpeg');

-- Productos Dulces (20)
INSERT INTO productos (id, nombre, categoria, descripcion, precio, imagen) VALUES
(1, 'Concha', 'Dulce', 'Pan dulce con costra de azúcar', 10.00, '/img/productos/dulces/dulce1.jpeg'),
(2, 'Oreja', 'Dulce', 'Hojaldre dulce con azúcar', 8.50, '/img/productos/dulces/dulce2.jpeg'),
(3, 'Cuernito de Chocolate', 'Dulce', 'Croissant relleno de chocolate', 12.00, '/img/productos/dulces/dulce3.jpeg'),
(4, 'Galleta de Avena', 'Dulce', 'Galleta dulce con avena', 6.00, '/img/productos/dulces/dulce4.jpeg'),
(5, 'Pan de Muerto', 'Dulce', 'Pan dulce tradicional', 15.00, '/img/productos/dulces/dulce5.jpeg'),
(6, 'Dona Glaseada', 'Dulce', 'Dona cubierta de azúcar glaseada', 12.00, '/img/productos/dulces/dulce6.jpeg'),
(7, 'Empanada de Cajeta', 'Dulce', 'Empanada rellena de cajeta', 14.00, '/img/productos/dulces/dulce7.jpeg'),
(8, 'Churro', 'Dulce', 'Churro espolvoreado con azúcar y canela', 7.00, '/img/productos/dulces/dulce8.jpeg'),
(9, 'Rosca de Reyes', 'Dulce', 'Rosca dulce tradicional', 150.00, '/img/productos/dulces/dulce9.jpeg'),
(10, 'Tartaleta de Frutas', 'Dulce', 'Base de galleta con crema pastelera y frutas', 30.00, '/img/productos/dulces/dulce10.jpeg'),
(11, 'Panqué de Nuez', 'Dulce', 'Panqué dulce con nuez', 25.00, '/img/productos/dulces/dulce11.jpeg'),
(12, 'Pay de Manzana', 'Dulce', 'Pay con relleno de manzana', 28.00, '/img/productos/dulces/dulce12.jpeg'),
(13, 'Beso Azucarado', 'Dulce', 'Pan relleno de mermelada', 9.00, '/img/productos/dulces/dulce13.jpeg'),
(14, 'Cocol', 'Dulce', 'Pan con anís y piloncillo', 10.00, '/img/productos/dulces/dulce14.jpeg'),
(15, 'Cuernito de Azúcar', 'Dulce', 'Croissant con azúcar espolvoreada', 11.00, '/img/productos/dulces/dulce15.jpeg'),
(16, 'Pastelito Individual', 'Dulce', 'Mini pastel de vainilla', 15.00, '/img/productos/dulces/dulce16.jpeg'),
(17, 'Galleta Chispas', 'Dulce', 'Galleta con chispas de chocolate', 6.50, '/img/productos/dulces/dulce17.jpeg'),
(18, 'Mantecadas', 'Dulce', 'Pan suave y esponjoso', 10.00, '/img/productos/dulces/dulce18.jpeg'),
(19, 'Volován de Crema', 'Dulce', 'Hojaldre relleno de crema pastelera', 12.00, '/img/productos/dulces/dulce19.jpeg'),
(20, 'Brazo Gitano', 'Dulce', 'Bizcocho relleno de crema', 35.00, '/img/productos/dulces/dulce20.jpeg');

-- Productos Salados (20) con imágenes en .jpeg
INSERT INTO productos (id, nombre, categoria, descripcion, precio, imagen) VALUES
(21, 'Baguette de Jamón', 'Salado', 'Baguette con jamón y queso', 35.00, '/img/productos/salado/salado21.jpeg'),
(22, 'Panini de Pollo', 'Salado', 'Panini relleno de pollo y queso', 45.00, '/img/productos/salado/salado22.jpeg'),
(23, 'Cuernito de Jamón y Queso', 'Salado', 'Croissant relleno', 30.00, '/img/productos/salado/salado23.jpeg'),
(24, 'Empanada de Atún', 'Salado', 'Empanada rellena de atún', 18.00, '/img/productos/salado/salado24.jpeg'),
(25, 'Bolillo con Chorizo', 'Salado', 'Bolillo relleno', 22.00, '/img/productos/salado/salado25.jpeg'),
(26, 'Tarta de Espinacas', 'Salado', 'Tarta salada', 28.00, '/img/productos/salado/salado26.jpeg'),
(27, 'Pizza Individual', 'Salado', 'Mini pizza artesanal', 40.00, '/img/productos/salado/salado27.jpeg'),
(28, 'Pan de Ajo', 'Salado', 'Pan saborizado con ajo y mantequilla', 15.00, '/img/productos/salado/salado28.jpeg'),
(29, 'Volován de Jamón', 'Salado', 'Hojaldre relleno de jamón', 20.00, '/img/productos/salado/salado29.jpeg'),
(30, 'Galleta de Queso', 'Salado', 'Galleta salada de queso', 12.00, '/img/productos/salado/salado30.jpeg'),
(31, 'Bollo Relleno de Queso', 'Salado', 'Pan relleno de queso', 18.00, '/img/productos/salado/salado31.jpeg'),
(32, 'Mollete', 'Salado', 'Bolillo con frijoles y queso gratinado', 25.00, '/img/productos/salado/salado32.jpeg'),
(33, 'Cuernito de Salami', 'Salado', 'Croissant relleno de salami', 32.00, '/img/productos/salado/salado33.jpeg'),
(34, 'Rollito de Salchicha', 'Salado', 'Pan relleno de salchicha', 20.00, '/img/productos/salado/salado34.jpeg'),
(35, 'Focaccia', 'Salado', 'Pan plano con hierbas y aceite', 28.00, '/img/productos/salado/salado35.jpeg'),
(36, 'Pambazo', 'Salado', 'Pan relleno de papa y chorizo', 30.00, '/img/productos/salado/salado36.jpeg'),
(37, 'Tartaleta de Queso', 'Salado', 'Tartaleta salada', 27.00, '/img/productos/salado/salado37.jpeg'),
(38, 'Empanada de Espinaca', 'Salado', 'Empanada rellena', 17.00, '/img/productos/salado/salado38.jpeg'),
(39, 'Crostini', 'Salado', 'Pan tostado con topping', 14.00, '/img/productos/salado/salado39.jpeg'),
(40, 'Brioche Salado', 'Salado', 'Brioche relleno de queso', 30.00, '/img/productos/salado/salado40.jpeg');


-- Productos Mixtos (5)
-- Productos Mixtos (5) con imágenes en .jpeg
INSERT INTO productos (id, nombre, categoria, descripcion, precio, imagen) VALUES
(41, 'Pretzel con Chocolate', 'Mixto', 'Pretzel salado cubierto de chocolate', 15.00, '/img/productos/mixto/mixto41.jpeg'),
(42, 'Panini con Mermelada y Queso', 'Mixto', 'Panini relleno dulce y salado', 38.00, '/img/productos/mixto/mixto42.jpeg'),
(43, 'Empanada de Queso con Cajeta', 'Mixto', 'Empanada con mezcla dulce y salada', 22.00, '/img/productos/mixto/mixto43.jpeg'),
(44, 'Baguette de Jamón y Miel', 'Mixto', 'Combinación de jamón y miel', 42.00, '/img/productos/mixto/mixto44.jpeg'),
(45, 'Cuernito de Queso Crema y Fresas', 'Mixto', 'Croissant relleno con mezcla dulce y salada', 35.00, '/img/productos/mixto/mixto45.jpeg');


-- Productos de Pan (9)
-- Productos de Pan (10) con imágenes en .jpeg
INSERT INTO productos (id, nombre, categoria, descripcion, precio, imagen) VALUES
(46, 'Barra pan', 'Pan', 'Barra de pan moderna', 1.50, '/img/productos/pan/pan46.jpeg'),
(47, 'Pan integral', 'Pan', 'Pan integral de trigo', 2.00, '/img/productos/pan/pan47.jpeg'),
(48, 'Barra de pan tradicional', 'Pan', 'Barra de pan al estilo tradicional (solo forma)', 1.50, '/img/productos/pan/pan48.jpeg'),
(49, 'Pan de molde', 'Pan', 'Pan de molde de trigo', 1.50, '/img/productos/pan/pan49.jpeg'),
(50, 'Pan de molde integral', 'Pan', 'Pan de molde integral de trigo', 2.00, '/img/productos/pan/pan50.jpeg'),
(51, 'Pan de picos', 'Pan', 'Pan de picos extra crujiente y con un toque de sal', 1.50, '/img/productos/pan/pan51.jpg'),
(52, 'Pan especial la casa', 'Pan', 'Pan especial que solo hace nuestra panadería', 1.20, '/img/productos/pan/pan52.jpeg'),
(53, 'Pan de espelta', 'Pan', 'Pan de espelta hecho al 100% con harina de espelta', 2.50, '/img/productos/pan/pan53.jpeg'),
(54, 'Pan con nueces', 'Pan', 'Pan integral con un añadido de nueces', 2.00, '/img/productos/pan/pan54.jpeg'),
(55, 'Pan de molde de centeno', 'Pan', 'Pan de molde de centeno', 1.50, '/img/productos/pan/pan55.jpeg');

 




