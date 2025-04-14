package com.app.panaderia.modelo.repositorios;

import java.util.List;
import com.app.panaderia.modelo.entidades.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {
    @Query("SELECT p FROM Producto p WHERE p.categoria.tipo = :tipo")
    List<Producto> findByCategoriaTipo(@Param("tipo") String tipo);

    
}
