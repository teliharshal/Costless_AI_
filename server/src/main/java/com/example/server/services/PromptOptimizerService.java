package com.example.server.services;

import com.example.server.dto.PromptResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PromptOptimizerService {

    private final GroqService geminiService;

    public PromptResponse optimizePrompt(String rawPrompt) {
        return geminiService.optimizePrompt(rawPrompt);
    }
}