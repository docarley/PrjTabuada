const botaoDisparaTabuadaConsole = document.querySelector
    ('.btn-console');
const botaoDisparaTabuadaDOM = document.querySelector
    ('.btn-DOM');

botaoDisparaTabuadaConsole.addEventListener('click', () => {
    const entradaUsuario = parseInt(document.querySelector('#tabuada-number').value);
    mostrarTabuadaNoConsole(entradaUsuario);
});
botaoDisparaTabuadaDOM.addEventListener('click', () => {
    const entradaUsuario = parseInt(document.querySelector('#tabuada-number').value);
    mostrarTabuadaNoDOM(entradaUsuario);
});



function mostrarTabuadaNoConsole(numero) {

    if (!isNaN(numero)) {
        console.log(`Mostrando a tabuada do ${numero}`);
        let contador = 0;
        while (contador <= 10) {
            console.log(`${numero} X ${contador} = ${numero * contador}`);
            contador++;
        }
        return
    }
    console.log("Número inválido! Digite um número válido");
}

function mostrarTabuadaNoDOM(numero) {

    const ulTabuada = document.querySelector('.tabuada');
    ulTabuada.innerHTML = "";

    if (!isNaN(numero)) {
        const tituloTabuada = document.querySelector('.titulo-tabuada');
        tituloTabuada.innerHTML = `Mostrando a tabuada do ${numero}`;    

        let contador = 0;
        while (contador <= 10) {
            const linhaTabuada = document.createElement('li');
            linhaTabuada.innerHTML = `${numero} X ${contador} = ${numero * contador}`;
            contador++;
            ulTabuada.appendChild(linhaTabuada);
        }
        return
    }
    tituloTabuada.innerHTML='Número inválido! Digite um número válido';    
}


