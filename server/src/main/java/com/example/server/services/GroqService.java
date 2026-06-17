package com.example.server.services;

import com.example.server.dto.PromptResponse;
import com.example.server.util.TokenEstimator;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class GroqService {

    @Value("${groq.api.key}")
    private String apiKey;

    public PromptResponse optimizePrompt(String prompt) {

        String optimizedPrompt = callGroq(prompt);

        int originalTokens =
                TokenEstimator.estimateTokens(prompt);

        int optimizedTokens =
                TokenEstimator.estimateTokens(optimizedPrompt);

        double savings =
                Math.max(
                        0,
                        (originalTokens - optimizedTokens)
                                * 0.00001
                );

        return PromptResponse.builder()
                .optimizedPrompt(optimizedPrompt)
                .originalTokens(originalTokens)
                .optimizedTokens(optimizedTokens)
                .estimatedSavings(savings)
                .build();
    }

    private String callGroq(String prompt) {

        try {

            RestTemplate restTemplate =
                    new RestTemplate();

            String url =
                    "https://api.groq.com/openai/v1/chat/completions";

            String instruction =
                    """
                    Rewrite and optimize the following prompt.
            
                    IMPORTANT:
                    Return ONLY the final optimized prompt.
                    Do not explain anything.
                    Do not add notes.
                    Do not add bullet points.
                    Do not say "Here's the optimized prompt".
                    Do not use quotation marks.
            
                    Prompt:
                    """ + prompt;

            HttpHeaders headers =
                    new HttpHeaders();

            headers.setContentType(
                    MediaType.APPLICATION_JSON
            );

            headers.setBearerAuth(apiKey);

            Map<String, Object> body =
                    Map.of(
                            "model",
                            "llama-3.3-70b-versatile",

                            "messages",
                            List.of(
                                    Map.of(
                                            "role",
                                            "user",
                                            "content",
                                            instruction
                                    )
                            ),

                            "temperature",
                            0.7
                    );

            HttpEntity<Map<String, Object>> entity =
                    new HttpEntity<>(body, headers);

            ResponseEntity<Map> response =
                    restTemplate.exchange(
                            url,
                            HttpMethod.POST,
                            entity,
                            Map.class
                    );

            List<Map> choices =
                    (List<Map>) response.getBody()
                            .get("choices");

            Map firstChoice =
                    choices.get(0);

            Map message =
                    (Map) firstChoice.get("message");

            return message.get("content")
                    .toString();

        } catch (Exception e) {

            e.printStackTrace();

            return "Failed to optimize prompt: "
                    + e.getMessage();
        }
    }

}
