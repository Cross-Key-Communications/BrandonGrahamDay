package rocks.zipcode.CKC.Comments;

import org.springframework.data.repository.CrudRepository;
import rocks.zipcode.CKC.Articles.Articles;

import java.util.List;


public interface CommentsRepository extends CrudRepository<Comments, Long> {
    List<Comments> findByArticlesId(Long articleId);
 }

