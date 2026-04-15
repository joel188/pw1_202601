import java.util.Scanner;

public class salario {
    public static void Salario(){
        //instancia de la clase
        Scanner sc = new Scanner(System.in);
        Double horas, precioH, salario, rap, ihss, sueldoN;
        rap= 0.0;
        ihss= 0.0;
        System.out.print("Ingrese el nombre del empleado: ");
        String nombre = sc.nextLine();

        System.out.print("Ingrese el precio por hora: ");
        precioH = sc.nextDouble();

        System.out.print("Ingrese las horas trabajadas: ");
        horas = sc.nextDouble();

        salario = precioH * horas;
        if(salario < 1500)
        {
            rap = salario * 0.02;
            ihss = salario * 0.03;
        }
        sueldoN = salario- (rap + ihss);
        System.out.println("El salario base es: " + salario);
        System.out.println("El Calculo de rap es: " + rap);
        System.out.println("Calculo del IHSS :" +ihss);
        System.out.println("El salario Neto es :" +sueldoN);

    }
    public static void main(String[] args) {
        // llamada de ña funcion
        Salario();
    }
}