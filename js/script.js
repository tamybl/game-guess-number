// Variables Globales
var number = null;
var times = 0;
var numberPlayer, sendTry;

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
    sendTry = document.getElementById('send-try');
    sendTry.addEventListener('click', function () {
        numberPlayer = document.getElementById('number-player');
        numberPlayer.focus();

        if (times < 9) {
            if(numberPlayer.value > number) {
                times++;
                message.innerHTML = `<p class="red">¡Equivocado!</p> <p class="warning-txt">Muy Alto! :(</p>`;
                showtry.innerHTML += `<span>${numberPlayer.value}</span>`;
              
            }
            if (numberPlayer.value < number) {
                if(numberPlayer.value === '') {
                    numberPlayer.value = 0;
                }
                times++;
                message.innerHTML = `<p class="red">¡Equivocado!</p> <p class="warning-txt">Muy Bajo! :(</p>`;
                showtry.innerHTML += `<span>${numberPlayer.value}</span>`;
            } 
            if ((/^[0-9]*$/gm).test(numberPlayer.value) === false) {
                times++;
                message.innerHTML = `<p class="red">¡Equivocado!</p> <p class="warning-txt">El texto que ingresaste no es válido</p>`;
                showtry.innerHTML += `<span>NaN</span>`;

            }
            if (numberPlayer.value == number){
                message.innerHTML = `<p class="green">Acertaste!</p>`;
                numberPlayer.disabled = true;
                sendTry.disabled = true;
                message.appendChild(btnReset);
                reset.addEventListener('click', () => {
                    resetOptions ();
                });
            }
        }
        else {
            message.innerHTML = `<p style="color: rgb(68, 68, 68);">Perdiste!<p>`;
            showtry.innerHTML += `<span>${numberPlayer.value}</span>`;
            message.appendChild(btnReset);
            numberPlayer.disabled = true;
            sendTry.disabled = true;
            reset.addEventListener('click', () => {
                resetOptions ();
            })
        }
        numberPlayer.value = '';
    })
}

function resetOptions () {
    times = 0;
    message.innerHTML = '';
    showtry.innerHTML = '';
    random();
    numberPlayer.disabled = false;
    sendTry.disabled = false;
}

gamePlay();

