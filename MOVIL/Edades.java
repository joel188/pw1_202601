import java.util.Scanner;

public class Edades{

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int edadActual;
        int sumaEdades = 0;
        int mayorEdad = 0;

        System.out.println("-- Registro de 10 edades (Sin vectores) --");

        for (int i = 1; i <= 10; i++) {
            System.out.print("Ingrese la edad de la persona " + i + ": ");
            edadActual = sc.nextInt();

        
            sumaEdades += edadActual;

            if (edadActual > mayorEdad) {
                mayorEdad = edadActual;
            }
        }

  
        mostrarMedia(sumaEdades);
        mostrarMayor(mayorEdad);
        mostrarPromedio(sumaEdades);

        sc.close();
    }

    // 1. Función que calcula la media
    public static void mostrarMedia(int sumaTotal) {
        double media = (double) sumaTotal / 10;
        System.out.println("\nLa media de las edades es: " + media);
    }

    // 2. Función que determina la persona de mayor edad
    public static void mostrarMayor(int mayor) {
        System.out.println("La persona de mayor edad tiene: " + mayor + " años.");
    }

    // 3. Función que calcula el promedio
    public static void mostrarPromedio(int sumaTotal) {
        double promedio = (double) sumaTotal / 10;
        System.out.println("El promedio de las 10 edades es: " + promedio);
    }
}