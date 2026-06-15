package com.example.server.dto;

import com.example.server.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@AllArgsConstructor
public class AuthResponse {
    private String token;
    private String email;
    private String name;
    private String role;
    private UserEntity user;
}
