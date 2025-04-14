package com.app.panaderia.controllers.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

import com.app.panaderia.modelo.entidades.Categoria;
import com.app.panaderia.modelo.servicios.CategoriaService;
@Controller
public class AdminController {

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping("/admin/categorias")
    public String verCategorias(Model model) {
        // Obtener todas las categorías
        List<Categoria> categorias = categoriaService.getAll();
        model.addAttribute("categorias", categorias);
        return "admin/categorias/index";  // Esta vista debe existir
    }

    @GetMapping("/admin")
    public String admin() {
        return "admin/index";
    }
}

