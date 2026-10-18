package com.example.server.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "users")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String role;
    private String profilePicture;
    private String googleId;
    private String plan;

}
