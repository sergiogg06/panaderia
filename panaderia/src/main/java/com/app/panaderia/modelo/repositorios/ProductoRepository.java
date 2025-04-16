package com.app.panaderia.modelo.repositorios;

import java.util.List;
import com.app.panaderia.modelo.entidades.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {
    List<Producto> findByCategoria_Tipo(String tipo);


    
}
