package com.example.server.dto;

import lombok.Data;

@Data
public class GoogleLoginRequest {
    private String email;
    private String name;
    private String googleId;
    private String profilePicture;
    private String token;
}
