
package rocks.zipcode.CKC.Articles;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import rocks.zipcode.CKC.Comments.Comments;

import java.util.Date;
import java.util.List;

@Entity
@Table(name="articles")
public class Articles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Articles_Id")
    Long id;
    @Column(name="Articles_Title")
    String title;
    @Column(name="Articles_Author")
    String author;
    @Column(name = "Articles_Thumbnail", length = 1000)
    String thumbnail;
    @Column(name="Articles_Description",length = 1000)
    String articleDescription;
    @Column(name="Articles_Body",length = 100000)
    String articleBody;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "Articles_PublishedAt")
    private Date publishedAt;

    @Embedded
    ArticlesSource source;

    @OneToMany(mappedBy = "articles")
    @JsonIgnore
    private List<Comments> comments;

    public List<Comments> getComments() { return comments; }

    public void setComments(List<Comments> comments) {
        this.comments = comments;
    }

    public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
}

public ArticlesSource getSource() {
        return source;
    }
public String getTitle() {
    return title;
}

public void setTitle(String title) {
    this.title = title;
}

public String getAuthor() {
    return author;
}

public void setAuthor(String author) {
    this.author = author;
}

public String getThumbnail() {
    return thumbnail;
}

public void setThumbnail(String thumbnail) {
    this.thumbnail = thumbnail;
}

public String getArticleBody() {
    return articleBody;
}

public void setArticleBody(String articleBody) {
    this.articleBody = articleBody;
}

public Articles(){}

public Articles(Long id, String title, String author, String thumbnail, String articleBody, Date publishedAt) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.thumbnail = thumbnail;
    this.articleBody = articleBody;
    this.publishedAt=publishedAt;
}

public void setArticleDescription(String description) {
    this.articleDescription=description;
}

public void setSource(ArticlesSource source) {
    this.source = source;

}
    public Date getPublishedAt() {
        return publishedAt;
    }

    public void setPublishedAt(Date publishedAt) {
        this.publishedAt = publishedAt;
    }
}