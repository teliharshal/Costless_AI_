package com.example.server.util;

public class TokenEstimator {

    public static int estimateTokens(String text) {

        if (text == null || text.isEmpty()) {
            return 0;
        }

        return text.split("\\s+").length;
    }
}