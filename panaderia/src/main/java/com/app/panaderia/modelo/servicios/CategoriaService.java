package com.app.panaderia.modelo.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.panaderia.modelo.entidades.Categoria;
import com.app.panaderia.modelo.repositorios.CategoriaRepository;

@Service
public class CategoriaService {
    // Inyección todo todo
    @Autowired
    CategoriaRepository catrep;

    public List<Categoria> getAll(){
        List<Categoria> categorias = this.catrep.findAll();
        return categorias;
    }

    public void create(Categoria cat){
        this.catrep.save(cat);
    }

    public void delete(String tipo){
        this.catrep.deleteById(tipo);
    }

    public Categoria getId(String tipo){
        return this.catrep.findById(tipo).get();
    }

}
