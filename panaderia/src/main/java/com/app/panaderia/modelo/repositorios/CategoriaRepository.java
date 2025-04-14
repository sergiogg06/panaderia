package com.app.panaderia.modelo.repositorios;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.app.panaderia.modelo.entidades.Categoria;



@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, String> {
    
}
