const btn = document.getElementById("button");
const input = document.querySelector("#input");
let output = document.getElementById("divOut");

btn.addEventListener('click', function (e)  {
    verificarInput(input.value);
});

function verificarInput(x){

    if (isNaN(x) == false) {
        if (x % 2 == 0) {
            mudarOutput("Par!");
        } else if (x % 2 == 1) {
            mudarOutput("Ímpar!");
        }
    }  else if (x == "") {
        alert("Insira um valor.");
    } else  {
        alert("Tipo de input inválido!");
    }
}

function mudarOutput(msg) {
    output.innerHTML = '<h2 id="output">' + msg + '</h2>';

}