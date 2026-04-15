import java.util.Scanner;

public class VentasTiendas {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Variables para los datos de entrada y control
        int cantDias;
        double montoVenta;
        
        // Variables para los cálculos
        double totalVentas = 0;
        double promedioVentas = 0;
        int diasSuperanPromedio = 0;

    
        do {
            System.out.print("Ingrese la cantidad de días a registrar (5-7): ");
            cantDias = sc.nextInt();
            if (cantDias < 5 || cantDias > 7) {
                System.out.println("Error: El rango permitido es de 5 a 7 días.");
            }
        } while (cantDias < 5 || cantDias > 7);


        for (int i = 1; i <= cantDias; i++) {
            do {
                System.out.print("Ingrese el monto del día " + i + ": ");
                montoVenta = sc.nextDouble();
                
                if (montoVenta <= 0) {
                    System.out.println("El monto debe ser mayor a cero. Intente de nuevo.");
                }
            } while (montoVenta <= 0);

            totalVentas += montoVenta; // Sumamos directamente a la variable total
        }

        // 3. Calcular promedio
        promedioVentas = totalVentas / cantDias;

     

        System.out.println("\n--- Resultados de la Semana ---");
        System.out.println("Total de ventas: $" + totalVentas);
        System.out.println("Promedio de ventas: $" + promedioVentas);

        // 4. Determinar rendimiento según el total (Estructuras Selectivas)
        if (totalVentas > 10000) {
            System.out.println("Mensaje: Excelente rendimiento");
        } else if (totalVentas >= 5000) {
            System.out.println("Mensaje: Buen rendimiento");
        } else {
            System.out.println("Mensaje: Rendimiento bajo");
        }

        sc.close();
    }
}