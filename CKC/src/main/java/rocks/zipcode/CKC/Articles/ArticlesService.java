package rocks.zipcode.CKC.Articles;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import rocks.zipcode.CKC.Articles.ArticlesDTO;

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

@Service
public class ArticlesService {

    public List<ArticlesDTO> fetchNews() {
        RestTemplate restTemplate = new RestTemplate();
        String apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e31ee66a0d864e2e9a447942e8af0b2c";

        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(response.getBody());
            JsonNode articlesNode = root.path("articles");

            // Convert the array of articles to List<ArticlesDTO>
            ArticlesDTO[] articleArray = mapper.treeToValue(articlesNode, ArticlesDTO[].class);
            return Arrays.asList(articleArray);
        } catch (Exception e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }
}
