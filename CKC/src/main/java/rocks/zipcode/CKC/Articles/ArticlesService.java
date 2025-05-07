package rocks.zipcode.CKC.Articles;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
public class ArticlesService {

    public ResponseEntity<String> fetchNews() {
        // Step 1: Create a helper to make the HTTP call
        RestTemplate restTemplate = new RestTemplate();
        // Step 2: This is the robot you're talking to (the API URL)
        String apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e31ee66a0d864e2e9a447942e8af0b2c";
        // Step 3: Ask the robot for data (GET request)
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);
        // Step 4: Print out what the robot said (the JSON text)
        return response;
    }
}
