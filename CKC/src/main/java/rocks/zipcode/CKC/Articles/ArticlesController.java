package rocks.zipcode.CKC.Articles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/articles")
public class ArticlesController {

    private final ArticlesRepository articlesRepository;
    private final ArticlesService articlesService;

    @Autowired
    public ArticlesController(ArticlesRepository articlesRepository, ArticlesService articlesService){ this.articlesRepository = articlesRepository;
        this.articlesService = articlesService; }

    @GetMapping
    public Iterable<Articles> getAllArticles(){ return articlesRepository.findAll(); }

    @CrossOrigin(origins = "http://localhost:3000") // Allows frontend access
    @GetMapping("/fetch")
    public List<Articles> fetchArticles() {
        return articlesService.fetchNews();
    }
}
