import java.util.Scanner;
public class clasesDos {
    public static String MostrarClases (int nota) {
        if(nota <= 69){
            return "Reprobado";
            
        }
        if(nota >= 70  && nota <= 84){
            return "Bueno ";
            
        }
        else if(nota >= 85  && nota <= 90){
            return" Muy Bueno ";
            
        }
         else if(nota >= 91  && nota <= 100){
            return" Excelente ";
            
        }
        else {
        return "Nota inválida"; 
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int nota;

        System.out.print("Ingrese su Nota: ");
        nota = sc.nextInt();

        String promedio = MostrarClases(nota);

        System.out.println("Su promedio es: " + promedio);
    }
}
