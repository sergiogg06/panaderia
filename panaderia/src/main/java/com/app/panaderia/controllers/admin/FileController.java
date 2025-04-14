package com.app.panaderia.controllers.admin;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/imagenes") // 📌 Ruta base para acceder a las imágenes
public class FileController {

    @GetMapping("/{filename}")
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) throws MalformedURLException {
        Path filePath = Paths.get(System.getProperty("user.dir") + "/imagenes").resolve(filename);
        Resource resource = new UrlResource(filePath.toUri());

        return ResponseEntity.ok().body(resource);
    }
}

