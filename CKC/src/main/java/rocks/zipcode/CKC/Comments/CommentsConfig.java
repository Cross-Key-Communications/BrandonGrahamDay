package rocks.zipcode.CKC.Comments;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CommentsConfig {
    @Bean
    public  Comments comments(){
        return new Comments();
    }
}
