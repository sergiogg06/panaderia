package com.app.panaderia.modelo.entidades;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "productos")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Usa AUTO_INCREMENT
    private int id;

    @Column(nullable = false)
    @NotEmpty
    @Size(min = 3, max = 50)
    private String nombre;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categoria", foreignKey = @ForeignKey(name = "FK_categoria_producto"), nullable = false)
    private Categoria categoria;

    @Column(nullable = false)
    @Size(max = 100)
    private String descripcion;

    @Column(nullable = false)
    private double precio;

    @Column(nullable = false)
    private String imagen; // Ruta o URL de la imagen

    // Constructor predeterminado
    public Producto() {
    }

    // Constructor con parámetros
    public Producto(int id, String nombre, Categoria categoria, String descripcion, double precio, String imagen) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }

    // Getters y setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    @Override
    public String toString() {
        return "<" + this.id + ","
                + this.nombre + ","
                + this.categoria.getTipo() + ","
                + this.descripcion + ","
                + this.precio + ","
                + this.imagen + ">";
    }
}

