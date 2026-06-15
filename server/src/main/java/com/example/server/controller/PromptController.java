package com.example.server.controller;

import com.example.server.dto.PromptRequestDto;
import com.example.server.dto.PromptResponse;
import com.example.server.services.PromptOptimizerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/prompt")
@RequiredArgsConstructor
@CrossOrigin("*")
public class PromptController {

    private final PromptOptimizerService promptOptimizerService;

    @PostMapping("/optimize")
    public PromptResponse optimize(
            @RequestBody PromptRequestDto request
            ){
        return promptOptimizerService
                .optimizePrompt(request.getPrompt());
    }
}
