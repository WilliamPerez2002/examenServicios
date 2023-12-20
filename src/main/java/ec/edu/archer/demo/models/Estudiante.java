package ec.edu.archer.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "estudiante")
public class Estudiante {
    @Id
    String CEDULA;
    String NOM_EST;
    String APE_EST;
    String DIR_EST;
    String TEL_EST;

    public Estudiante(String CEDULA, String NOM_EST, String APE_EST, String DIR_EST, String TEL_EST) {
        this.CEDULA = CEDULA;
        this.NOM_EST = NOM_EST;
        this.APE_EST = APE_EST;
        this.DIR_EST = DIR_EST;
        this.TEL_EST = TEL_EST;
    }

    public Estudiante() {
    }

    public String getCEDULA() {
        return CEDULA;
    }

    public void setCEDULA(String CEDULA) {
        this.CEDULA = CEDULA;
    }

    public String getNOM_EST() {
        return NOM_EST;
    }

    public void setNOM_EST(String NOM_EST) {
        this.NOM_EST = NOM_EST;
    }

    public String getAPE_EST() {
        return APE_EST;
    }

    public void setAPE_EST(String APE_EST) {
        this.APE_EST = APE_EST;
    }

    public String getDIR_EST() {
        return DIR_EST;
    }

    public void setDIR_EST(String DIR_EST) {
        this.DIR_EST = DIR_EST;
    }

    public String getTEL_EST() {
        return TEL_EST;
    }

    public void setTEL_EST(String TEL_EST) {
        this.TEL_EST = TEL_EST;
    }
}
