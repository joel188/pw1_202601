import java.util.*;

public class vacuna {
    public static void mostrarVacuna(int edad)  {
        if(edad <= 0){
            System.out.println("Error, la edad no puedo menor a cero ");
            return;
        }
        if(edad >= 0 && edad  <=5){
            System.out.print("Vacuna infatil");
        }
        else if (edad >= 6 && edad <= 17){
            System.out.print("Vacuna Escolar");
        }
        else if (edad >= 18 && edad <= 59){
            System.out.print("Vacuna Adulto");
        }
        else{
            System.out.print("Vacuna Adulto Mayor");
        }
    }

    public static void main(String [] args){
        Scanner sc = new Scanner(System.in);
        int edad;

        System.out.print("Ingrese su Edad: ");
        edad = sc.nextInt();
        mostrarVacuna(edad);
    }
}
