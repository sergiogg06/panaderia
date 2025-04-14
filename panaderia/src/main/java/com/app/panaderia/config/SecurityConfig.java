package com.app.panaderia.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/contacto", "/enviarMensaje", "/css/**", "/js/**", "/images/**").permitAll() // Permitir acceso sin login
                .requestMatchers("/admin/**").hasRole("ADMIN") // Solo pedir login para /admin/**
                .anyRequest().permitAll()
            )
            .csrf(csrf -> csrf.disable()) // Desactivar CSRF para evitar bloqueos en formularios POST
            .formLogin(form -> form
                .loginPage("/login") // Página de login personalizada
                .defaultSuccessUrl("/admin", true) // Redirigir al admin tras login
                .permitAll()
            )
            .logout(logout -> logout
                .logoutSuccessUrl("/") // Redirige a la página principal tras logout
                .permitAll()
            );
        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        var userDetailsService = new InMemoryUserDetailsManager();

        var admin = User.withUsername("admin")
                .password("{noop}admin") // `{noop}` desactiva el cifrado, solo para pruebas
                .roles("ADMIN")
                .build();

        userDetailsService.createUser(admin);

        return userDetailsService;
    }
}
