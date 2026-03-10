
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarLista();
}

function renderizarLista() {
    const listaUI = document.getElementById('listaAmigos');
    listaUI.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaUI.appendChild(li);
    }
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    
    const resultadoUI = document.getElementById('resultado');
    resultadoUI.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
    
    
    document.getElementById('listaAmigos').innerHTML = "";
}