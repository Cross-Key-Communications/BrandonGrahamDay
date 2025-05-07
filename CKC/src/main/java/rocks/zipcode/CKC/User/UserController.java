package rocks.zipcode.CKC.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/user")
public class UserController {


    private final UserRepository userRepository;


    @Autowired
    public UserController(UserRepository userRepository) {
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
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userRepository.save(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
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
        User newUser = new User();
        newUser.setFirstName(firstName);
        newUser.setLastName(lastName);
        newUser.setUserName(userName);
        newUser.setEmail(email);
        newUser.setPassword(password);


        // Persist user
        userRepository.save(newUser);


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
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        return userRepository.findById(id)
                .map(existingUser -> {
                    existingUser.setFirstName(updatedUser.getFirstName());
                    existingUser.setLastName(updatedUser.getLastName());
                    existingUser.setUserName(updatedUser.getUserName());
                    existingUser.setEmail(updatedUser.getEmail());
                    existingUser.setPassword(updatedUser.getPassword());
                    userRepository.save(existingUser);
                    return ResponseEntity.ok(existingUser);
                })
                .orElse(ResponseEntity.notFound().build());
    }


}
