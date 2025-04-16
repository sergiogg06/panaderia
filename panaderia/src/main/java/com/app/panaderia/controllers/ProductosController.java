package com.app.panaderia.controllers;

import org.springframework.web.bind.annotation.*;
import java.util.List;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.panaderia.modelo.entidades.Producto;
import com.app.panaderia.modelo.repositorios.ProductoRepository;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductosController {

    private final ProductoRepository productoRepository;

    public ProductosController(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    @GetMapping
    public List<Producto> getAllProductos() {
        return productoRepository.findAll();
    }
}

