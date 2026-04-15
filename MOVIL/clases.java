import java.util.*;

public class clases {
    public static void mostrarclases(int nota)
    {
        if(nota <= 69){
            System.out.println("Reprobado ");
            return;
        }
        if(nota >= 70  && nota <= 84){
            System.out.println("Bueno ");
            return;
        }
        else if(nota >= 85  && nota <= 90){
            System.out.println(" Muy Bueno ");
            return;
        }
         else if(nota >= 91  && nota <= 100){
            System.out.println(" Excelente ");
            return;
        }

    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int nota;

        System.out.print("Ingrese su Nota: ");
        nota = sc.nextInt();
        mostrarclases(nota);
        
    }
}
