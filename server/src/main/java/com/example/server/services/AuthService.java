package com.example.server.services;

import com.example.server.dto.AuthResponse;
import com.example.server.dto.GoogleLoginRequest;
import com.example.server.entity.UserEntity;
import com.example.server.repository.UserRepository;
import com.example.server.util.JwtUtil;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Value("${google.client-id}")
    private String googleClientId;

    public AuthResponse googleLogin(GoogleLoginRequest request) {

        UserEntity user = userRepository
                .findByEmail(request.getEmail())
                .orElseGet(() -> {

                    UserEntity newUser = UserEntity.builder()
                            .email(request.getEmail())
                            .name(request.getName())
                            .googleId(request.getGoogleId())
                            .profilePicture(request.getProfilePicture())
                            .role("USER")
                            .plan("FREE")
                            .build();

                    return userRepository.save(newUser);
                });

        String token = jwtUtil.generateToken(user.getEmail());

        return AuthResponse.builder()
                .token(token)
                .user(user)
                .build();
    }
}
