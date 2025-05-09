package rocks.zipcode.CKC.Comments;

import org.springframework.data.repository.CrudRepository;

import javax.xml.stream.events.Comment;
import java.util.List;


public interface CommentsRepository extends CrudRepository<Comments, Long> {

}

//List<Comment> findByPostId( Long id);