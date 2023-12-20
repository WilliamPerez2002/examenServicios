package ec.edu.archer.demo.controllers;

import ec.edu.archer.demo.models.Estudiante;
import ec.edu.archer.demo.repository.EstudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/rest")
public class ApiEstudiante {
    @Autowired
    EstudianteRepository EstudianteRepository;
    @GetMapping("/saludar")
    public String saludar(){
        return "Hola Mundo";
    }
    @GetMapping("/")
    public String index(){
        return "index";
    }
    @GetMapping("/all")
    public List<Estudiante> getEstudiantes(){
        return EstudianteRepository.findAll();
    }
    @PostMapping("/save")
    public Estudiante saveEstudiante(@RequestBody Estudiante estudiante){
        return EstudianteRepository.saveAndFlush(estudiante);
    }
    @PutMapping("/edit/{cedula}")
    public Estudiante setEstudiante(@PathVariable String cedula, @RequestBody Estudiante estudiante){
        estudiante.setCEDULA(cedula);
        return EstudianteRepository.saveAndFlush(estudiante);
    }
    @DeleteMapping("/delete/{cedula}")
    public void deleteEstudiante(@PathVariable String cedula){
        EstudianteRepository.deleteById(cedula);
    }

    @GetMapping("/all/{cedula}")
    public List<Estudiante> getEstudiantes(@PathVariable String cedula) {
        List<Estudiante> estudiantes = EstudianteRepository.findAllByCEDULAContaining(cedula);
        return estudiantes != null ? estudiantes : Collections.emptyList();
    }

}
