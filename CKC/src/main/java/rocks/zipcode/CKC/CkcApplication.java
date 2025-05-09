package rocks.zipcode.CKC;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication
@EntityScan(basePackages = "rocks.zipcode.CKC")
@EnableJpaRepositories(basePackages = "rocks.zipcode.CKC")
public class CkcApplication {

	public static void main(String[] args) {
		SpringApplication.run(CkcApplication.class, args);

	}

}