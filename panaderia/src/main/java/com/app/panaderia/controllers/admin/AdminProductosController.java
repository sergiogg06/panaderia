package com.app.panaderia.controllers.admin;

import com.app.panaderia.modelo.entidades.Producto;
import com.app.panaderia.modelo.repositorios.ProductoRepository;
import com.app.panaderia.modelo.entidades.Categoria;
import com.app.panaderia.modelo.servicios.AdminProductoService;
import com.app.panaderia.modelo.servicios.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import java.util.Optional;
import java.util.UUID;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Controller
@RequestMapping("/admin/productos")
public class AdminProductosController {

    @Autowired
    private AdminProductoService adminProductoService;

    @Autowired
    private CategoriaService categoriaService;

    @Autowired
    private ProductoRepository productoRepository;

    // Ruta para ver todos los productos
    @GetMapping
    public String listarProductos(@RequestParam(required = false) String categoria, Model model) {
        List<Producto> productos;
        if (categoria != null && !categoria.isEmpty()) {
            productos = adminProductoService.getByCategoria(categoria);
            model.addAttribute("categoriaSeleccionada", categoria);
        } else {
            productos = adminProductoService.getAll();
        }

        List<Categoria> categorias = categoriaService.getAll();
        model.addAttribute("productos", productos);
        model.addAttribute("categorias", categorias);

        return "admin/productos/index";
    }

    // Ruta para editar un producto
    @GetMapping("/editar/{id}")
    public String editarProducto(@PathVariable("id") int id, Model model) {
        Optional<Producto> producto = productoRepository.findById(id);
        if (producto.isPresent()) {
            model.addAttribute("producto", producto.get());
            model.addAttribute("categorias", categoriaService.getAll()); // Agregar todas las categorías
            return "admin/productos/editar"; // Vista de edición
        }
        return "redirect:/admin/productos"; // Redirigir si no se encuentra el producto
    }

    // Ruta para procesar la edición de un producto
    @PostMapping("/editar/{id}")
    public String actualizarProducto(@PathVariable("id") int id,
            @RequestParam String nombre,
            @RequestParam String descripcion,
            @RequestParam double precio,
            @RequestParam String categoria,
            @RequestParam(required = false) MultipartFile imagen,
            Model model) {
        Optional<Producto> productoOpt = productoRepository.findById(id);
        if (productoOpt.isPresent()) {
            Producto producto = productoOpt.get();
            producto.setNombre(nombre);
            producto.setDescripcion(descripcion);
            producto.setPrecio(precio);
            producto.setCategoria(categoriaService.getId(categoria));

            // Si hay una nueva imagen, actualizarla
            if (imagen != null && !imagen.isEmpty()) {
                try {
                    Path path = Paths.get("src/main/resources/static/images/" + imagen.getOriginalFilename());
                    Files.write(path, imagen.getBytes());
                    producto.setImagen("/images/" + imagen.getOriginalFilename());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }

            productoRepository.save(producto); // Guardar el producto actualizado
        }

        return "redirect:/admin/productos"; // Redirigir al listado de productos
    }

    // Ruta para eliminar un producto
    @GetMapping("/eliminar/{id}")
    public String eliminarProducto(@PathVariable("id") int id) {
        Optional<Producto> producto = productoRepository.findById(id);
        if (producto.isPresent()) {
            productoRepository.delete(producto.get());
        }
        return "redirect:/admin/productos"; // Redirigir después de eliminar
    }

    // Ruta para mostrar el formulario de nuevo producto
    @GetMapping("/new")
    public String mostrarFormularioNuevoProducto(Model model) {
        List<Categoria> categorias = categoriaService.getAll();
        model.addAttribute("producto", new Producto());
        model.addAttribute("categorias", categorias);
        return "admin/productos/new"; // Ruta del formulario de nuevo producto
    }

    // Ruta para procesar el formulario de nuevo producto
    @PostMapping("/new")
    public String guardarNuevoProducto(@ModelAttribute Producto producto,
                                       @RequestParam("file") MultipartFile file) {
        try {
            System.out.println("Iniciando guardado de producto...");
    
            // 📌 Definir el directorio externo donde se guardarán las imágenes
            String uploadDir = System.getProperty("user.dir") + "/imagenes/"; // ⬅️ Guardar en "img/" en la raíz
            Path directory = Paths.get(uploadDir);
    
            // ⚠️ Crear la carpeta si no existe
            if (!Files.exists(directory)) {
                Files.createDirectories(directory);
                System.out.println("Directorio creado: " + directory.toAbsolutePath());
            }
    
            if (!file.isEmpty()) {
                // 📌 Generar un nombre único para evitar duplicados
                String filename = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
                Path path = directory.resolve(filename);
    
                // Guardar la imagen en la carpeta "img"
                Files.write(path, file.getBytes());
    
                // 📌 Guardar solo la ruta relativa en la BD
                producto.setImagen("/imagenes/" + filename);
            } else {
                producto.setImagen("/img/default.png"); // Imagen por defecto si no se sube ninguna
            }
    
            System.out.println("Guardando producto en la base de datos: " + producto);
            productoRepository.save(producto);
            System.out.println("Producto guardado con éxito.");
    
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("Error al guardar el producto.");
        }
        return "redirect:/admin/productos";
    }
    

}
