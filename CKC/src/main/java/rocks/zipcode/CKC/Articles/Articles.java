package rocks.zipcode.CKC.Articles;

import jakarta.persistence.*;

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
    @Column(name="Articles_Thumbnail")
    String thumbnail;
    @Column(name="Articles_Description")
    String articleDescription;
    @Column(name="Articles_Body")
    String articleBody;
    @Embedded
    ArticlesSource source;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Articles(Long id, String title, String author, String thumbnail, String articleBody) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.thumbnail = thumbnail;
        this.articleBody = articleBody;
    }

    public void setArticleDescription(String description) {
    }

    public void setSource(ArticlesSource source) {
    }
}
