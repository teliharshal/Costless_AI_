package com.example.server.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PromptResponse {

    private String optimizedPrompt;

    private int originalTokens;

    private int optimizedTokens;

    private double estimatedSavings;

}