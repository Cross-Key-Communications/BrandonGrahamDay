package rocks.zipcode.CKC.Articles;

import com.fasterxml.jackson.databind.node.JsonNodeFactory;
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

    private final ArticlesRepository articlesRepository;

    public ArticlesService(ArticlesRepository articlesRepository) {
        this.articlesRepository = articlesRepository;
    }

    public List<ArticlesDTO> fetchNews() {
        List<ArticlesDTO> dtoList = new ArrayList<>();
        try {
            String url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e31ee66a0d864e2e9a447942e8af0b2c";
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(response.getBody());
            JsonNode articlesNode = root.path("articles");

            for (JsonNode node : articlesNode) {
                ArticlesDTO dto = new ArticlesDTO();
                dto.setTitle(node.path("title").asText(null));
                dto.setAuthor(node.path("author").asText(null));
                dto.setDescription(node.path("description").asText(null));
                dto.setContent(node.path("content").asText(null));
                dto.setUrlToImage(node.path("urlToImage").asText(null));
                dto.setPublishedAt(node.path("publishedAt").asText(null));

                JsonNode sourceNode = node.path("source");
                if (!sourceNode.isMissingNode()) {
                    dto.setId(sourceNode.path("id").asText(null));
                    dto.setName(sourceNode.path("name").asText(null));
                }

                dtoList.add(dto);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return dtoList;
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
