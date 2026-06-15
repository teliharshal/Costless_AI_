package com.example.server.controller;

import com.example.server.dto.UserDto;
import com.example.server.entity.UserEntity;
import com.example.server.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping
    public UserEntity createUser(
            @RequestBody UserEntity user
    ) {
        return userService.save(user);
    }

    @GetMapping
    public List<UserEntity> getAllUsers(){
        return userService.getAllUsers();
    }
}