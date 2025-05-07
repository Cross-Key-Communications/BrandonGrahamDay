package rocks.zipcode.CKC;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication(scanBasePackages = "rocks.zipcode.CKC")
@EnableJpaRepositories
public class CkcApplication {

	public static void main(String[] args) {
		SpringApplication.run(CkcApplication.class, args);

	}

}
