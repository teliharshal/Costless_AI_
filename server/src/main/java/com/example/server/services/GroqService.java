package com.example.server.services;

import com.example.server.dto.PromptResponse;
import com.example.server.util.TokenEstimator;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class GroqService {

    @Value("${groq.api.key}")
    private String apiKey;

    // Use a Gemini model available to your API key.
    private static final String MODEL = "gemini-3.8-flash";

    public PromptResponse optimizePrompt(String prompt) {

        String optimizedPrompt = callGroq(prompt);

        int originalTokens =
                TokenEstimator.estimateTokens(prompt);

        int optimizedTokens =
                TokenEstimator.estimateTokens(optimizedPrompt);

        double savings = Math.max(
                0,
                (originalTokens - optimizedTokens) * 0.00001
        );

        return PromptResponse.builder()
                .optimizedPrompt(optimizedPrompt)
                .originalTokens(originalTokens)
                .optimizedTokens(optimizedTokens)
                .estimatedSavings(savings)
                .build();
    }

    private String callGroq(String prompt) {

        String url =
                "https://generativelanguage.googleapis.com/v1beta/models/"
                        + MODEL + ":generateContent";

        String instruction = """
                Rewrite and optimize the following prompt.

                IMPORTANT:
                Return ONLY the final optimized prompt.
                Do not explain anything.
                Do not add notes.
                Do not add bullet points.
                Do not say "Here's the optimized prompt".
                Do not add quotation marks.

                Prompt:
                """ + prompt;

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("x-goog-api-key", apiKey);

        Map<String, Object> body = Map.of(
                "contents", List.of(
                        Map.of(
                                "parts", List.of(
                                        Map.of("text", instruction)
                                )
                        )
                ),
                "generationConfig", Map.of(
                        "temperature", 0.7
                )
        );

        HttpEntity<Map<String, Object>> entity =
                new HttpEntity<>(body, headers);

        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<Map> response = restTemplate.exchange(
                url,
                HttpMethod.POST,
                entity,
                Map.class
        );

        Map responseBody = response.getBody();

        if (responseBody == null) {
            throw new IllegalStateException(
                    "Gemini returned an empty response."
            );
        }

        List<Map> candidates =
                (List<Map>) responseBody.get("candidates");

        if (candidates == null || candidates.isEmpty()) {
            throw new IllegalStateException(
                    "Gemini returned no candidates: " + responseBody
            );
        }

        Map content = (Map) candidates.get(0).get("content");
        List<Map> parts = (List<Map>) content.get("parts");

        if (parts == null || parts.isEmpty()) {
            throw new IllegalStateException(
                    "Gemini returned no text parts."
            );
        }

        Object text = parts.get(0).get("text");

        if (text == null) {
            throw new IllegalStateException(
                    "Gemini response did not contain text."
            );
        }

        return text.toString().trim();
    }
}
