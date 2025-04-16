package com.app.panaderia.modelo.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.panaderia.modelo.entidades.Producto;
import com.app.panaderia.modelo.repositorios.ProductoRepository;

@Service
public class ProductoService {
    // Inyección de dependencias para el repositorio de productos
    @Autowired
    private ProductoRepository productoRepository;

    // Obtener todos los productos
    public List<Producto> getAll() {
        return productoRepository.findAll();
    }

    // Crear un nuevo producto
    public void create(Producto producto) {
        this.productoRepository.save(producto);
    }

    // Eliminar un producto por su ID
    public void delete(int id) {
        this.productoRepository.deleteById(id);
    }

    // Obtener un producto por su ID
    public Producto getById(int id) {
        return this.productoRepository.findById(id).orElse(null); // Usamos orElse(null) para evitar excepciones
    }
    
}
