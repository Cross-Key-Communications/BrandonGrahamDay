package rocks.zipcode.CKC.Comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rocks.zipcode.CKC.Articles.Articles;
import rocks.zipcode.CKC.Articles.ArticlesRepository;
import rocks.zipcode.CKC.Comments.Comments;
import rocks.zipcode.CKC.Comments.CommentsDTO;
import rocks.zipcode.CKC.Comments.CommentsRepository;
import rocks.zipcode.CKC.User.UserRepository;
import rocks.zipcode.CKC.User.Users;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/comments")
@CrossOrigin(origins = "http://localhost:3000")
public class CommentsController {

    private final CommentsRepository commentsRepository;
    private final UserRepository userRepository;
    private final ArticlesRepository articlesRepository;


    @Autowired
    public CommentsController(CommentsRepository commentsRepository, UserRepository userRepository, ArticlesRepository articlesRepository) {
        this.commentsRepository = commentsRepository;
        this.userRepository = userRepository;
        this.articlesRepository = articlesRepository;
    }

    @PostMapping("/add/comment")
    public Comments addComment(@RequestBody CommentsDTO dto) {
        Users user = userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        Articles article = articlesRepository.findById(dto.getArticleId())
                .orElseThrow(() -> new RuntimeException("Article not found"));

        Comments comment = new Comments();
        comment.setUser(user);
        comment.setArticle(article);
        comment.setText(dto.getText());
        comment.setDatePosted(new Date());

        return commentsRepository.save(comment);
    }

    @GetMapping("/article/{articleId}")
    public ResponseEntity<List<Comments>> getCommentsByArticle(@PathVariable Long articleId) {
        List<Comments> comments = commentsRepository.findByArticlesId(articleId);
        if (comments.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(comments);
    }


    @GetMapping("/fetch/all")
    public List<Comments> getAllComments() {
        return (List<Comments>) commentsRepository.findAll();
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<Iterable<Comments>> getCommentsByUser(@PathVariable Long userId) {
        Users user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return ResponseEntity.ok(user.getComments());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteComment(@PathVariable Long id) {
        if (commentsRepository.existsById(id)) {
            commentsRepository.deleteById(id);
            return ResponseEntity.ok("Comment deleted successfully.");
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Comments> updateComment(@PathVariable Long id, @RequestBody Comments updatedComment) {
        return commentsRepository.findById(id)
                .map(existing -> {
                    existing.setText(updatedComment.getText());
                    existing.setDatePosted(new Date());
                    commentsRepository.save(existing);
                    return ResponseEntity.ok(existing);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}

