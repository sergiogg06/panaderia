package com.app.panaderia.controllers.admin;

import java.util.Map;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class LoginController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String usuario, @RequestParam String password) {
        if ("admin".equals(usuario) && "admin123".equals(password)) {
            return ResponseEntity.ok(Map.of(
                "usuario", "admin",
                "rol", "ADMIN"
            ));
        } else {
            return ResponseEntity.status(401).body("Credenciales inválidas");
        }
    }
}

