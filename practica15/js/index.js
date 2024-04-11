
    let a = 10;
    let b = 20;

    let sumar = a + b;
    let restar = a - b;
    let multiplica = a * b;
    let dividir = a / b;

    let residuo = 48 % 7;
    console.log(residuo);

    let mayor = a > b;
    let menor = a < b;
    let mayorIgual = a >= b;
    let menorIgual = a <= b;
    let igual = a == b;

    a = -5;
    b = 10*(-1);

    if( a != b) {
        console.log("Son diferentes");
    }
    else {
        console.log("Son iguales");
    }

    //Operador ternario
    let comparacion = a > b ? "Si, a es mayor a b " : "NO, es mayor";
    console.log(comparacion);


    let x = 100; let y = 200;
    function multiplicar(a, b) {
        return a * b;
    }
    let resultado = multiplicar(x, y);
    console.log(resultado);

    function calcularAreaCirculo(radio)  {
        let area = Math.PI * Math.pow(radio, 2);
        return area;
    }

    console.log(calcularAreaCirculo(10));

    function toCelsius(fahrenheit) {
        return (5/9) * (fahrenheit-32);
    }

    let temp = toCelsius(77);
    console.log("Temperatura:" + temp);