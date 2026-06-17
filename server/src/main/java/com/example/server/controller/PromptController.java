package com.example.server.controller;

import com.example.server.dto.PromptRequestDto;
import com.example.server.dto.PromptResponse;
import com.example.server.services.GroqService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/prompts")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PromptController {

    private final GroqService groqService;

    @PostMapping("/optimize")
    public ResponseEntity<PromptResponse> optimizePrompt(
            @RequestBody PromptRequestDto request) {

        PromptResponse response =
                groqService.optimizePrompt(request.getPrompt());

        return ResponseEntity.ok(response);
    }
}