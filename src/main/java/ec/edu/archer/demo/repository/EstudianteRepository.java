package ec.edu.archer.demo.repository;

import ec.edu.archer.demo.models.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EstudianteRepository extends JpaRepository<Estudiante, String>{
    List<Estudiante> findAllByCEDULAContaining(String ced_est);
}