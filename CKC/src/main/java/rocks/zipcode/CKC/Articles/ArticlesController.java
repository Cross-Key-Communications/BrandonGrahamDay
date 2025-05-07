package rocks.zipcode.CKC.Articles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rocks.zipcode.CKC.User.User;

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

    @GetMapping("/fetch")
    public ResponseEntity<String> fetchArticle() {
        return articlesService.fetchNews();
    }
}
