import java.util.*;

public class Repaso{
    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);

       int cont=0;
       double Nota=0;
       double Suma=0;

       System.out.print("Ingrese la Cantidad de Notas: ");
       int Cant = sc.nextInt();

       for(int i = 1; i<= Cant; i++ ){
        System.out.print("Ingrese la Nota "+ cont + 1 +": ");
        Nota = sc.nextDouble();

        Suma += Nota;

        cont++;
       }
       double Promedio = Suma/Cant;
       System.out.println("El promedio es:" + Promedio);


    
    }
}