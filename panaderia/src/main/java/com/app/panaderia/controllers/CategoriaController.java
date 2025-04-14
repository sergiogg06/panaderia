package com.app.panaderia.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import com.app.panaderia.modelo.servicios.CategoriaService;
import com.app.panaderia.modelo.entidades.Categoria;
import org.springframework.ui.Model;

@Controller
public class CategoriaController {
    @Autowired
    private CategoriaService catServ;

    @GetMapping("/categorias")
    public String getCategoria(Model modelo) {
        System.out.println();
        System.out.println();
        System.out.println();
        List<Categoria> categorias = catServ.getAll();
        categorias.forEach(System.out::println);
        modelo.addAttribute("Lcategorias", categorias);
        return "www/categorias/listar";
    }
}
