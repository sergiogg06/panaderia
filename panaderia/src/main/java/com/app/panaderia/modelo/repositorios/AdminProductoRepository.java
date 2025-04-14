package com.app.panaderia.modelo.repositorios;

import com.app.panaderia.modelo.entidades.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdminProductoRepository extends JpaRepository<Producto, Integer> {
    // Buscar productos por el tipo de categoría (relación ManyToOne)
    List<Producto> findByCategoriaTipo(String tipo);
}
