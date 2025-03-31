package Clase2;
public class MainClase2 {
    public static void main(String[] args) {
            /*
            Declaras una constante con la palabra final, esta no puede cambiar ya
             */
        final double PI = 3.14;
        final int mayoriaEdad = 18;

        System.out.println("El número Pi es : " + PI);
        System.out.println("La mayoria de edad es: " + mayoriaEdad);

        //operaciones
        int numero1 = 6;
        int numero2 = 8;
        int suma = numero1 + numero2;
        int resta = numero2 - numero1;
        System.out.println(" la resta es: " + resta);
        System.out.println(" la suma es: " + suma);

        //operaciones relacionadas
        int x = 6;
        int y = 8;
        System.out.println(" ¿Es la x igual a y?:" + (x == y));  //Da false
        System.out.println(" ¿Es la x diferente a y?:" + (x!=y)); //Da true
        System.out.println(" ¿Es la x mayor a y: " + (x>y)); //Da false

        //Operador lógico, es aquel que combina operaciones lógicas
        boolean a = true;
        boolean b = false;
        boolean c = true;
        System.out.println(" a AND b: " + (a & b));
        System.out.println(" a AND c: " + (a & c));
        System.out.println(" a or b: " + (a || b));
        System.out.println(" No a: " + (!a));// el simbolo ! es no

        //Expresiones y /o evaluciones
        int resultado = (10 + 5) * 2 / 3;
        int resultado2 = 10 + 5 * 2/3;
        System.out.println("El resultado de la expresión es: " + resultado);
        System.out.println("El resultado 2 de la expresion es: " + resultado2);
    }
}
