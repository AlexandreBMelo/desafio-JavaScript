let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desáfio";

function consoleClique(){
    console.log("O botão foi clicado");
} 
function alertClique(){
    alert("Eu amo JS");
} 
function promptClique(){
    let cidade = prompt("Digite o nome de uma cidade");
    alert(`Estive em ${cidade} e lembrei de você`);
} 
function somaClique(){

    let digitoUm = prompt("Digite um número inteiro");
    let digitoDois = prompt("Digite outro número, irei somá-los")
//parseInt converte as Strings em inteiros, pois o prompt retorna somente valores em formato de String.
    let numeroUm = parseInt(digitoUm);
    let numeroDois = parseInt(digitoDois);

    let resultadoSoma = numeroUm + numeroDois;
    alert(resultadoSoma);
}

