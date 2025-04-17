package com.app.panaderia.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.app.panaderia.modelo.servicios.EmailService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // ⚠️ habilita peticiones desde el frontend
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
    public ResponseEntity<String> enviarMensaje(
            @RequestParam String nombre,
            @RequestParam String email,
            @RequestParam String mensaje) {

        String asunto = "Nuevo mensaje de contacto de " + nombre;
        String cuerpoMensaje = "Nombre: " + nombre + "\nCorreo: " + email + "\n\nMensaje:\n" + mensaje;

        emailService.enviarCorreo("TU_CORREO@gmail.com", asunto, cuerpoMensaje);

        return ResponseEntity.ok("Mensaje enviado con éxito");
    }
}
