//calculador!
const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

alert("Que operacion arealizar");

operacion = prompt("1: suma 2: resta 3: division 4: multiplicacion");

if (operacion == 1) {
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    resultado = sumar(numero1,numero2)
    alert(`tu resultado es: ${resultado}`);
}
if (operacion == 2) {
    let numero1 = prompt("Primer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    resultado = restar(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}
if (operacion == 3) {
    let numero1 = prompt("Primer numero para dividir");
    let numero2 = prompt("Segundo numero para dividir");
    resultado = dividir(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}
if (operacion == 4) {
    let numero1 = prompt("Primer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    resultado = multiplicar(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}
else {
    alert("Operacion no valida");
}
