package rocks.zipcode.CKC.Comments;

public class CommentsDTO {

    private Long userId;
    private Long articleId;
    private String text;

    // Getters and setters
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public Long getArticleId() { return articleId; }
    public void setArticleId(Long articleId) { this.articleId = articleId; }

    public String getText() { return text; }
    public void setText(String text) { this.text = text; }
}

