package com.example.server.services;

import org.springframework.stereotype.Service;

@Service
public class TokenEstimationService {

    /**
     * A highly simplified token estimation based on character count and spaces.
     * In a production app, we would use a JTokkit library for OpenAI BPE tokenization.
     */
    public int estimateTokens(String text) {
        if (text == null || text.isEmpty()) {
            return 0;
        }
        // Rough estimate: 1 token ~= 4 chars in English
        return (int) Math.ceil((double) text.length() / 4.0);
    }
}
