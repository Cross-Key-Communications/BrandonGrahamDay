package rocks.zipcode.CKC.User;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserConfig {
    @Bean
    public Users user(){
        return new Users();
    }
}