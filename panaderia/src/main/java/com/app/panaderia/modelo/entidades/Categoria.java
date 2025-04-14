package com.app.panaderia.modelo.entidades;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "categoria")
public class Categoria {
  

    @Id
    private String tipo;

    @Column(nullable = false) 
    @NotEmpty
    private String descripcion;

    @Column(nullable = false)
    private String imagen;

    public Categoria() {
    }

    public Categoria(String tipo, String descripcion, String imagen) {
        this.setTipo(tipo);
        this.setDescripcion(descripcion);
        this.setImagen(imagen); 
    }


    // Getters

    public String getTipo() {
        return tipo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public String getImagen() {
        return imagen;
    }

    // Setters

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
    
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    @Override
    public String toString() {
        return this.tipo;
    }
    
}
