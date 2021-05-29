class Calculadora {
    constructor(){}

//calculador!
sumar (num1, num2){
    return parseInt(num1) + parseInt(num2);
}
restar(num1, num2){
    return parseInt(num1) - parseInt(num2);
}
dividir(num1, num2){
    return parseInt(num1) / parseInt(num2);
}
multiplicar(num1, num2){
    return parseInt(num1) * parseInt(num2);
}
potenciar(num,exp) {
    let numero = num;
    for (let i = 1; i < exp; i++) {
        numero = numero * num;
        return numero;
        
    }
}
raizCuadrada(num) {
    return Math.sqrt(num);
}
raizCubica(num) {
    return Math.cbrt(num);
}
}
const calculador = new Calculadora;

alert("Que operacion arealizar");

let operacion = prompt("1: suma 2: resta 3: division 4: multiplicacion 5: Potencia 6: Raiz 2 7: Raiz 3");

if (operacion == 1) {
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    let resultado = calculador.sumar(numero1,numero2)
    alert(`tu resultado es: ${resultado}`);
}
if (operacion == 2) {
    let numero1 = prompt("Primer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    let resultado = calculador.restar(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}
if (operacion == 3) {
    let numero1 = prompt("Primer numero para dividir");
    let numero2 = prompt("Segundo numero para dividir");
    let resultado = calculadora.dividir(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}
if (operacion == 5) {
    let numero1 = prompt("numero a potenciar");
    let numero2 = prompt("exponente");
    let resultado = calculadora.potenciar(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}
if (operacion == 6) {
    let numero1 = prompt("Raiz cuadradad de: ");
    let resultado = calculadora.raizCuadrada(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}
if (operacion == 7) {
    let numero1 = prompt("Raiz cuadradad de: ");
    let resultado = calculadora.raizCubica(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}
else {
    alert("Operacion no valida");
}

