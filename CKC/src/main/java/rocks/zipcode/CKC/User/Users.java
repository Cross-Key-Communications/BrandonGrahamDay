package rocks.zipcode.CKC.User;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import rocks.zipcode.CKC.Comments.Comments;

import java.util.List;


@Entity
@Table(name="users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "User_Id")
    private Long id;
    @Column(name = "First_Name")
    private String firstName;
    @Column(name = "Last_Name")
    private String lastName;
    @Column(name = "User_Name")
    private String userName;
    @Column(name = "Email")
    private String email;
    @Column(name = "Password")
    private String password;


    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Comments> comments;


    public Users() {


    }


    public Users(Long id, String firstName, String lastName, String email, String userName, String password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email=email;
        this.userName = userName;
        this.password = password;
    }


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getFirstName() {
        return firstName;
    }


    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }


    public String getLastName() {
        return lastName;
    }
    public String getEmail() {return email;}


    public void setEmail(String email) {this.email = email;}


    public void setLastName(String lastName) {
        this.lastName = lastName;
    }


    public String getUserName() {
        return userName;
    }


    public void setUserName(String userName) {
        this.userName = userName;
    }


    public String getPassword() {
        return password;
    }


    public void setPassword(String password) {
        this.password = password;
    }
    public List<Comments> getComments() {
        return comments;
    }


    public void setComments(List<Comments> comments) {
        this.comments = comments;
    }
}

