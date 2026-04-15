import java.util.*;

public class vacunaDos {
    public static String MostrarVacuna(int edad){
        if(edad <= 0){
            return "Error, la edad no puedo menor a cero";
        }
        if(edad >= 0 && edad  <=5){
            return "Vacuna infatil";
        }
        else if (edad >= 6 && edad <= 17){
            return "Vacuna Escolar";
        }
        else if (edad >= 18 && edad <= 59){
            return "Vacuna Adulto";
        }
        else{
            return "Vacuna Adulto Mayor";
        }
    }

     public static void main(String [] args){
        Scanner sc = new Scanner(System.in);
        int edad;

        System.out.print("Ingrese su Edad: ");
        edad = sc.nextInt();

        String resultado = MostrarVacuna(edad);
        System.out.println("La observacion es: " + resultado);
    }
}
