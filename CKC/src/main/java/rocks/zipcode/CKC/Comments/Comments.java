package rocks.zipcode.CKC.Comments;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import rocks.zipcode.CKC.User.User;


import java.time.LocalDateTime;


@Entity
@Table(name="comments")
public class Comments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private Long postId;


    // Optional: enable this when Article entity is ready
    // @ManyToOne
    // @JoinColumn(name = "article_id")
    // private Articles article;


    @Column(name = "text")
    private String text;


    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date_posted")
    private LocalDateTime datePosted;


    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;


    public Comments() {}


    public Comments(Long postId, User user, String text, LocalDateTime datePosted) {
        this.postId = postId;
        this.user = user;
        this.text = text;
        this.datePosted = datePosted;
    }


    public Long getPostId() { return postId; }


    public void setPostId(Long postId) { this.postId = postId; }


    public User getUser() { return user; }


    public void setUser(User user) { this.user = user; }


    public String getText() { return text; }


    public void setText(String text) { this.text = text; }


    public LocalDateTime getDatePosted() { return datePosted; }


    public void setDatePosted(LocalDateTime datePosted) { this.datePosted = datePosted; }
}
