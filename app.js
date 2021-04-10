var machine
var player
var p1 = 0
var p2 = 0
var choise


function jogar() {

    machine = Math.round(Math.random() * 1) // cria o numero aleatorio

    player = document.querySelector('input[name="moeda"]:checked').value;

    if (machine == 0) {
        choise = 'Coroa'
        document.getElementById('resultado').innerHTML = choise

    } else {
        choise = 'Cara'
        document.getElementById('resultado').innerHTML = choise

    }

    if (player == machine) {
        p1 += 1
        document.getElementById('player').innerHTML = p1
    } else if (player != machine) {
        p2 += 1
        document.getElementById('machine').innerHTML = p2
    }

}
