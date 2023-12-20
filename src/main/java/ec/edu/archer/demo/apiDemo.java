package ec.edu.archer.demo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
@RestController
@RequestMapping("/api")
public class apiDemo {
    @GetMapping("/saludar")
    public String saludar(){
        return "Hola Mundo";
    }
}