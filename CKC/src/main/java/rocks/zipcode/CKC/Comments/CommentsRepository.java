package rocks.zipcode.CKC.Comments;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import javax.xml.stream.events.Comment;
import java.util.List;


public interface CommentsRepository extends JpaRepository<Comments, Long> {
    List<Comments> findByPostId( Long postId);
}

