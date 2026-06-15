package com.example.server.controller;

import com.example.server.dto.AuthResponse;
import com.example.server.dto.GoogleLoginRequest;
import com.example.server.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // Allows requests from React app
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/google")
    public ResponseEntity<?> authenticateWithGoogle(@RequestBody GoogleLoginRequest request) {
        try {
            AuthResponse response = authService.googleLogin(request);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Authentication failed: " + e.getMessage());
        }
    }
    
    @GetMapping("/me")
    public ResponseEntity<?> getMe() {
        return ResponseEntity.ok("User details will be implemented here based on JWT Context.");
    }
}
