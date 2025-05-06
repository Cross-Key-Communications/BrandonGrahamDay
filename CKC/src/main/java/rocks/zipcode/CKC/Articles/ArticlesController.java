package rocks.zipcode.CKC.Articles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public void fetchArticle(){ articlesService.fetchNews(); }

}
