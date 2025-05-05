package rocks.zipcode.CKC.Articles;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ArticlesConfig {
    @Bean
    public Articles articles(){ return new Articles();}
}
