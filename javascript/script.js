let nota, resultado;

function Verificar() {
    nota = Number(document.getElementById("nota").value);
    resultado = document.getElementById("resultado");

    if (nota <5) {
        resultado.innerHTML= "Reprovado";
    }

    else if (nota < 7) {
        resultado.innerHTML = "Recuperação";
    }
    else {
        resultado.innerHTML = "Aprovado";
    }
}

let A, B, Resultado;
 
function calcular() {

    A = Number (document.getElementById("A").value);
    B = Number (document.getElementById("B").value);
    Resultado = document.getElementById("Resultado");
 
   if (A < B) {
       Resultado.innerHTML= A - B;
    }

    else if (B > A) {
        Resultado.innerHTML= B - A;
     }

}