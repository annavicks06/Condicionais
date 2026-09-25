//Variaveis
//let numero1, numero2, resultado
 
 
//Processamento
function somar(){
//Entrada
numero1 = parseInt( document.getElementById("numero1").value);
numero2 = parseInt(document.getElementById("numero2").value);
 
resultado1= numero1 + numero2;
 
//Saída
document.getElementById("resultado1").innerHTML = "Resultado:" + resultado1;
}
 
//Variaveis
let Celsius, F;
 
function converter(){
    //Entrada
    Celsius = parseFloat(document.getElementById("celsius").value);
 
    //Processamento
    F = (Celsius * 9 / 5) + 32
 
    //Saída
    document.getElementById("resultado2").innerHTML = "F =" + F;
}
 
//Variaveis
let numer1, numer2, resultado3
 
//Procesamento
function calcular(){
    //entrada
    numer1 = parseFloat(document.getElementById("numer1").value);
    numer2 = parseFloat(document.getElementById("numer2").value);
 
    //Processamento
    V = (3.14159 * numer1 * numer1) * numer2
 
    //Saída
    document.getElementById("V").innerHTML = "V =" + V;
}
 
 
// Variáveis
let nume1, nume2, nume3, volume;
 
// Entrada
function calcularVolume2() {
nume1 = parseInt(document.getElementById("nume1").value);
nume2 = parseInt(document.getElementById("nume2").value);
nume3 = parseInt(document.getElementById("nume3").value);
 
// Processamento
volume = nume1 * nume2 * nume3;
 
// Saída
document.getElementById("result").innerHTML =
"Resultado: " + volume;
}