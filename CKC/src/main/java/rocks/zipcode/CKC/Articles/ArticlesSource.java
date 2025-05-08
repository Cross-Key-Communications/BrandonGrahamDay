package rocks.zipcode.CKC.Articles;

import jakarta.persistence.*;

@Embeddable
public class ArticlesSource {

    private String id;
    private String name;

    public ArticlesSource(){}
    public ArticlesSource(String name, String id){}

    public void setName(String name) {
        this.name = name;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public String getId() {
        return id;
    }
}
