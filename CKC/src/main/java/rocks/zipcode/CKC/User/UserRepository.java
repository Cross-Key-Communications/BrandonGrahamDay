package rocks.zipcode.CKC.User;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;


public interface UserRepository extends CrudRepository<Users,Long> {
    Optional<Users> findById(Long id);
}
