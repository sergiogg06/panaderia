package com.app.panaderia.modelo.servicios;

import com.app.panaderia.modelo.entidades.Producto;
import com.app.panaderia.modelo.repositorios.AdminProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminProductoService {

    @Autowired
    private AdminProductoRepository adminProductoRepository;

    public List<Producto> getAll() {
        return adminProductoRepository.findAll();
    }

    public List<Producto> getByCategoria(String tipoCategoria) {
        return adminProductoRepository.findByCategoriaTipo(tipoCategoria);
    }
    
    public void create(Producto producto) {
        // Guardar el nuevo producto en la base de datos
        adminProductoRepository.save(producto);
    }
}
