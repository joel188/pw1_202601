import java.util.*;

public class vector {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("¿Cuantos numeros ingresara?");
        int n = sc.nextInt();

        double[] numeros = new double[n];
        double suma = 0;

        for(int i = 0; i < n; i++){
            System.out.println("Ingrese el numero " + (i + 1) + ":");
            numeros[i] = sc.nextDouble();
            suma += numeros[i];

        }

        double media = suma / n;
        System.out.println("La media es " + media);
        for(int i = 0; i < n; i++){
            System.out.println("Los numeros son: " + numeros[i] );

        }
    }
}
