// Variables Globales
var number = null;
var times = 0;

// Generar un numero es 1 a 100, guardarlo en una variable

// Creación boton para volver a jugar
var btnReset = document.createElement('button');
btnReset.setAttribute("id", "reset");
btnReset.appendChild(document.createTextNode('VOLVER A JUGAR'));

// Funcion genera número aleatorio
let random = () => {
    number = Math.floor((Math.random() * 100) + 1);
}

function gamePlay () {
    random();
    var sendTry = document.getElementById('send-try');
    sendTry.addEventListener('click', function () {
        var numberPlayer = document.getElementById('number-player').value;
        document.getElementById('number-player').value = '';
        if (times < 9) {
            if(numberPlayer > number) {
                times++;
                message.innerHTML = `<p class="red">¡Equivocado!</p> <p class="warning-txt">Muy Alto! :(</p>`;
                showtry.innerHTML += `<span>${numberPlayer}</span>`;
              
            }
            if (numberPlayer < number) {
                times++;
                message.innerHTML = `<p class="red">¡Equivocado!</p> <p class="warning-txt">Muy Bajo! :(</p>`;
                showtry.innerHTML += `<span>${numberPlayer}</span>`;
            } 
            if ((/^[0-9]*$/gm).test(numberPlayer) === false || numberPlayer === '') {
                times++;
                message.innerHTML = `<p class="red">¡Equivocado!</p> <p class="warning-txt">El texto que ingresaste no es válido</p>`;
                showtry.innerHTML += `<span>NaN</span>`;

            }
            if (numberPlayer == number){
                message.innerHTML = `<p class="green">Acertaste!</p>`;
                message.appendChild(btnReset);
                reset.addEventListener('click', () => {
                    times = 0;
                    message.innerHTML = '';
                    showtry.innerHTML = '';
                    random();
                });
            }
        }
        else {
            message.innerHTML = `Perdiste!`;
            message.appendChild(btnReset);
            reset.addEventListener('click', () => {
                times = 0;
                message.innerHTML = '';
                showtry.innerHTML = '';
                random();
            })
        }

    })
}

gamePlay();

