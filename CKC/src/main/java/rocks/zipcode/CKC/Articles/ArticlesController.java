package rocks.zipcode.CKC.Articles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/articles")
public class ArticlesController {

    private final ArticlesRepository articlesRepository;

    @Autowired
    public ArticlesController(ArticlesRepository articlesRepository){ this.articlesRepository = articlesRepository; }

    @GetMapping
    public Iterable<Articles> getAllArticles(){ return articlesRepository.findAll(); }


}
