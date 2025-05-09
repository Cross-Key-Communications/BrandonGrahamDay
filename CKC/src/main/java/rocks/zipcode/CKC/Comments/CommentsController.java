package rocks.zipcode.CKC.Comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rocks.zipcode.CKC.User.Users;
import rocks.zipcode.CKC.User.UserRepository;

import javax.xml.stream.events.Comment;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/comments")
public class CommentsController {


    private final CommentsRepository commentsRepository;
    private final UserRepository userRepository;


    @Autowired
    public CommentsController(CommentsRepository commentsRepository, UserRepository userRepository) {
        this.commentsRepository = commentsRepository;
        this.userRepository = userRepository;
    }


    @PostMapping("/submit")
    public String submitComment(@RequestParam Long userId, /*@RequestParam Long articleId,*/ @RequestParam String text) {
        // the use of optional allows for null value to exist
        Users users = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("You must have an account to comment."));
        // think about redirecting to sign in page after it's made


        // Articles article = articleRepository.findById(articleId).orElse("Article no longer exists");


        Comments newComment = new Comments();
        newComment.setUser(users);
        // newComment.setArticle(article);
        newComment.setText(text);
        newComment.setDatePosted(new Date());


        commentsRepository.save(newComment);
        return "Comment Submitted";
        // return "redirect:/articles/" + articleId;
    }

//    @GetMapping("/post/{postId}")
//    public List<Comments> getCommentsByPost(@PathVariable Long postId) {
//        return commentsRepository.findByPostId(postId);
//    }

//    @PostMapping
//    public Comments createComments(@RequestBody Comments comments) {
//        comments.setDatePosted(LocalDateTime.now());
//        return commentsRepository.save(comments);
//    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<Iterable<Comments>> getCommentsByUser(@PathVariable Long userId) {
        Users users = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found."));
        return ResponseEntity.ok(users.getComments());
    }
    // DELETE comment by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteComment(@PathVariable Long id) {
        if (commentsRepository.existsById(id)) {
            commentsRepository.deleteById(id);
            return ResponseEntity.ok("Comment deleted successfully.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    // PUT (update) comment by ID
    @PutMapping("/{id}")
    public ResponseEntity<Comments> updateComment(@PathVariable Long id, @RequestBody Comments updatedComment) {
        return commentsRepository.findById(id)
                .map(existingComment -> {
                    existingComment.setText(updatedComment.getText());
                    existingComment.setDatePosted(new Date()); // update timestamp
                    commentsRepository.save(existingComment);
                    return ResponseEntity.ok(existingComment);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/fetch/comments")
public List<Comments> fetchComments() {
        return commentsRepository.findAll();
    }

//    @GetMapping("/articles/{id}")
//    public String showArticle(@PathVariable Long id, Model model) {
//        // Load article, comments, etc.
//        return "article-detail"; // name of Thymeleaf view
//    }
}
