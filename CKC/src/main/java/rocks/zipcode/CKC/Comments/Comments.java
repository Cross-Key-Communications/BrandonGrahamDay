package rocks.zipcode.CKC.Comments;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import rocks.zipcode.CKC.User.Users;


import java.util.Date;


@Entity
@Table(name="comments")
public class Comments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private Long id;


    // Optional: enable this when Article entity is ready
    // @ManyToOne
    // @JoinColumn(name = "article_id")
    // private Articles article;


    @Column(name = "text")
    private String text;


    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date_posted")
    private Date datePosted;


    @ManyToOne
    @JoinColumn(name = "user_id")  // this name should match the column in your DB
    private Users user;


    public Comments() {}


    public Comments(Long id, Users users, String text, Date datePosted) {
        this.id = id;
        this.user = user;
        this.text = text;
        this.datePosted = datePosted;
    }


    public Long getId() { return id; }


    public void setId(Long id) { this.id = id; }


    public Users getUser() { return user; }


    public void setUser(Users users) { this.user = user; }


    public String getText() { return text; }


    public void setText(String text) { this.text = text; }


    public Date getDatePosted() { return datePosted; }


    public void setDatePosted(Date datePosted) { this.datePosted = datePosted; }
}
