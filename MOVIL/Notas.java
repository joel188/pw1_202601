import java.util.Scanner;

public class Notas {
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int cont = 0;
        double nota= 0;
        double suma=0;

        System.out.print("¿Cuantas notas dese ingresar? ");
        int cant = sc.nextInt();

        for(int i = 1; i<= cant; i++){
            System.out.print("Ingrese la nota " + cont + 1 + " : ");
            nota = sc.nextDouble();

            //Acumular nota
            suma += nota;

            //incrementar contador
            cont++;
        }
        double promedio = suma/cant;
        System.out.println("El promedio de la nota es: " + promedio);
    }
}
