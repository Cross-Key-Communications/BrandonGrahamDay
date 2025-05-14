package rocks.zipcode.CKC.Comments;

public class CommentsDTO {

    private String userName;
    private Long articleId;
    private String text;

    // Getters and setters
    public String getUser() { return userName; }
    public void setUserId(String userId) { this.userName = userId; }

    public Long getArticleId() { return articleId; }
    public void setArticleId(Long articleId) { this.articleId = articleId; }

    public String getText() { return text; }
    public void setText(String text) { this.text = text; }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}

