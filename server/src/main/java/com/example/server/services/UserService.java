package com.example.server.services;

import com.example.server.entity.UserEntity;
import com.example.server.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public UserEntity save(UserEntity user) {

        if(user.getRole() == null){
            user.setRole("User");
        }
        return userRepository.save(user);
    }

    public List<UserEntity> getAllUsers(){
        return userRepository.findAll();
    }

    public UserEntity getByUserEmail(String email){
         return userRepository.findByEmail(email)
                 .orElse(null);
    }

}
