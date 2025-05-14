package rocks.zipcode.CKC.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rocks.zipcode.CKC.Comments.Comments;
import rocks.zipcode.CKC.Comments.CommentsRepository;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;


@RestController
@RequestMapping("/user")
public class UserController {


    private final UserRepository userRepository;
    private final CommentsRepository commentsRepository;


    @Autowired
    public UserController(UserRepository userRepository,CommentsRepository commentsRepository) {
        this.commentsRepository=commentsRepository;
        this.userRepository = userRepository;
    }

    //    @GetMapping
//    // this is what was returning the json to the webpage
//    public Iterable<User> getAllUsers() {
//        return userRepository.findAll();
//    }


    @GetMapping//("/signup")
    // serves the signup page (used if using Thymeleaf or similar view engine)
    public String showSignUpPage() {
        return "signup";
    }


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    // endpoint to create a user with a JSON body
    public ResponseEntity<Users> createUser(@RequestBody Users users) {
        Users savedUsers = userRepository.save(users);
        return new ResponseEntity<>(savedUsers, HttpStatus.CREATED);
    }

    @GetMapping("/fetch/all")
    public List<Comments> getAllComments() {
        Iterable<Comments> iterable = commentsRepository.findAll();
        return StreamSupport.stream(iterable.spliterator(), false)
                .collect(Collectors.toList());
    }


    @PostMapping("/save")
    // saves user information from form-style parameters
    public String saveUser(@RequestParam("firstName") String firstName,
                           @RequestParam("lastName") String lastName,
                           @RequestParam("userName") String userName,
                           @RequestParam("birthDay") String birthDay,
                           @RequestParam("email") String email,
                           @RequestParam("password") String password) {


        // Construct user entity
        Users newUsers = new Users();
        newUsers.setFirstName(firstName);
        newUsers.setLastName(lastName);
        newUsers.setUserName(userName);
        newUsers.setEmail(email);
        newUsers.setPassword(password);


        // Persist user
        userRepository.save(newUsers);


        // Redirect to homepage
        return "redirect:/";
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return ResponseEntity.ok("User deleted successfully.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<Users> updateUser(@PathVariable Long id, @RequestBody Users updatedUsers) {
        return userRepository.findById(id)
                .map(existingUser -> {
                    existingUser.setFirstName(updatedUsers.getFirstName());
                    existingUser.setLastName(updatedUsers.getLastName());
                    existingUser.setUserName(updatedUsers.getUserName());
                    existingUser.setEmail(updatedUsers.getEmail());
                    existingUser.setPassword(updatedUsers.getPassword());
                    userRepository.save(existingUser);
                    return ResponseEntity.ok(existingUser);
                })
                .orElse(ResponseEntity.notFound().build());
    }


}
