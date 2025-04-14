package com.app.panaderia.controllers.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String login() {
        return "admin/login"; //Hay que tener un archivo login.html en templates
    }
}
