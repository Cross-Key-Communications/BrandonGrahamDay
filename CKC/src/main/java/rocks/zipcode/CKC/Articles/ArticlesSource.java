package rocks.zipcode.CKC.Articles;

import jakarta.persistence.*;

@Embeddable
public class ArticlesSource {

    @Column(name = "source_id")
    private String id;

    @Column(name = "source_name")
    private String name;

    public ArticlesSource(){}
    public ArticlesSource(String name, String id){
        this.name = name;
        this.id = id;
    }

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
