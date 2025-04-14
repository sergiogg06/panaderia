package com.app.panaderia.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.app.panaderia.modelo.servicios.EmailService;

@Controller
public class SiteController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/")
    public String index() {
        return "www/site/index";
    }

    @GetMapping("/contacto")
    public String contacto() {
        return "www/site/contacto";
    }

    @PostMapping("/enviarMensaje")
    public String enviarMensaje(
            @RequestParam("nombre") String nombre,
            @RequestParam("email") String email,
            @RequestParam("mensaje") String mensaje,
            Model modelo) {

        // Configurar el mensaje del email
        String asunto = "Nuevo mensaje de contacto de " + nombre;
        String cuerpoMensaje = "Nombre: " + nombre + "\nCorreo: " + email + "\n\nMensaje:\n" + mensaje;

        // Enviar el correo
        emailService.enviarCorreo("TU_CORREO@gmail.com", asunto, cuerpoMensaje);

        // Agregar mensaje de éxito
        modelo.addAttribute("exito", "Tu mensaje ha sido enviado con éxito.");
        return "www/site/contacto"; // Redirige a la misma página de contacto
    }
}

