package rocks.zipcode.CKC.Articles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/articles")
@CrossOrigin(origins = "http://localhost:3000")
public class ArticlesController {

    private final ArticlesRepository articlesRepository;
    private final ArticlesService articlesService;

    @Autowired
    public ArticlesController(ArticlesRepository articlesRepository, ArticlesService articlesService){ this.articlesRepository = articlesRepository;
        this.articlesService = articlesService; }

    @GetMapping("/fetch")
    public List<Articles> getNews() {
        return articlesService.fetchNews();
    }

    @GetMapping
    public Iterable<Articles> getAllArticles(){ return articlesRepository.findAll(); }

}