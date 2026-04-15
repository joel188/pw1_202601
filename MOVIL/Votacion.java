import java.util.Scanner;

public class Votacion {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int votosA = 0;
        int votosB = 0;
        System.out.print("Ingrese la cantidad total de votantes: ");
        int totalVotantes = sc.nextInt();

        for (int i = 1; i <= totalVotantes; i++){
            int voto;

           do {
                System.out.print("Votante #" + i + " (1 para Planilla A, 2 para Planilla B): ");
                voto = sc.nextInt();
                
                if (voto != 1 && voto != 2) {
                    System.out.println("¡Voto inválido! Por favor ingrese 1 o 2.");
                }
            } while (voto != 1 && voto != 2);

            // Contabilizar el voto
            if (voto == 1) {
                votosA++;
            } else {
                votosB++;
            }
        }

        // Cálculos de porcentajes
        double porcentajeA = ((double) votosA / totalVotantes) * 100;
        double porcentajeB = ((double) votosB / totalVotantes) * 100;

        // Mostrar resultados
        System.out.println("\n--- RESULTADOS FINALES ---");
        System.out.println("Planilla A: " + votosA + " votos (" + porcentajeA + "%)");
        System.out.println("Planilla B: " + votosB + " votos (" + porcentajeB + "%)");

        // Determinar ganador o empate
        if (votosA > votosB) {
            System.out.println("Ganadora: Planilla A");
        } else if (votosB > votosA) {
            System.out.println("Ganadora: Planilla B");
        } else {
            System.out.println("Resultado: Empate técnico");
        }
        
        sc.close();
        
    }
}
