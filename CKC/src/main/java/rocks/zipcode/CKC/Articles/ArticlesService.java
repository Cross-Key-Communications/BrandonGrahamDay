package rocks.zipcode.CKC.Articles;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArticlesService {

    private final ArticlesRepository articlesRepository;

    public ArticlesService(ArticlesRepository articlesRepository) {
        this.articlesRepository = articlesRepository;
    }

    public List<Articles> fetchNews() {
        List<Articles> savedArticles = new ArrayList<>();

        try {
            String url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e31ee66a0d864e2e9a447942e8af0b2c";
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(response.getBody());
            JsonNode articlesNode = root.path("articles");

            for (JsonNode node : articlesNode) {
                Articles article = new Articles();
                article.setTitle(node.path("title").asText(null));
                article.setAuthor(node.path("author").asText(null));
                article.setThumbnail(node.path("urlToImage").asText(null));
                article.setArticleDescription(node.path("description").asText(null));
                article.setArticleBody(node.path("content").asText(null));

                // Handle embedded source
                ArticlesSource source = new ArticlesSource();
                JsonNode sourceNode = node.path("source");
                source.setId(sourceNode.path("id").asText(null));
                source.setName(sourceNode.path("name").asText(null));
                article.setSource(source);

                // Save to DB
                Articles saved = articlesRepository.save(article);
                savedArticles.add(saved);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return savedArticles;
    }
}




//@Service
//public class ArticlesService {
//
//    public List<ArticlesDTO> fetchNews() {
//        RestTemplate restTemplate = new RestTemplate();
//        String apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e31ee66a0d864e2e9a447942e8af0b2c";
//
//        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);
//
//        try {
//            ObjectMapper mapper = new ObjectMapper();
//            JsonNode root = mapper.readTree(response.getBody());
//            JsonNode articlesNode = root.path("articles");
//
//            // Convert the array of articles to List<ArticlesDTO>
//            ArticlesDTO[] articleArray = mapper.treeToValue(articlesNode, ArticlesDTO[].class);
//            return Arrays.asList(articleArray);
//        } catch (Exception e) {
//            e.printStackTrace();
//            return new ArrayList<>();
//        }
//    }
//}
