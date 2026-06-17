package com.example.server.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class PromptResponse {

    private String optimizedPrompt;

    private int originalTokens;

    private int optimizedTokens;

    private double estimatedSavings;

    public PromptResponse(String optimizedPrompt) {
    }
}