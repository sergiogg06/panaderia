package com.app.panaderia.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.panaderia.modelo.servicios.CategoriaService;
import com.app.panaderia.modelo.entidades.Categoria;
import com.app.panaderia.modelo.repositorios.CategoriaRepository;

import org.springframework.ui.Model;

@RestController
@RequestMapping("/api/categorias")
@CrossOrigin(origins = "http://localhost:5173")
public class CategoriaController {

    private final CategoriaRepository categoriaRepository;

    public CategoriaController(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    @GetMapping
    public List<Categoria> getCategorias() {
        return categoriaRepository.findAll();
    }

    // Opcionales: POST, PUT, DELETE
}
