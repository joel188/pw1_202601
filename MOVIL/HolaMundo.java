import java.util.Scanner;

public class HolaMundo{

    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        double neto;

        System.out.print( "Ingrese su nombre ");
        String nombre = sc.nextLine();

        System.out.print( "Ingrese su hora ");
        int hora = sc.nextInt();

        System.out.println( "Ingrese su Salario ");
        double salario = sc.nextDouble();

        neto = salario * 100;
        System.out.println  ("El resultado es: " + neto);

    }
   
}