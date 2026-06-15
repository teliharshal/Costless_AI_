package com.example.server.services;

import com.example.server.dto.PromptResponse;
import com.example.server.util.TokenEstimator;
import org.springframework.stereotype.Service;

@Service
public class PromptOptimizerService {

    public PromptResponse optimizePrompt(String rawPrompt) {

        String optimized = rawPrompt
                .replaceAll("\\s+", " ")
                .trim();

        optimized =
                "Optimize this request clearly:\n" + optimized;

        int originalTokens =
                TokenEstimator.estimateTokens(rawPrompt);

        int optimizedTokens =
                TokenEstimator.estimateTokens(optimized);

        double savings =
                (originalTokens - optimizedTokens) * 0.00001;

        return PromptResponse.builder()
                .optimizedPrompt(optimized)
                .originalTokens(originalTokens)
                .optimizedTokens(optimizedTokens)
                .estimatedSavings(savings)
                .build();
    }
}