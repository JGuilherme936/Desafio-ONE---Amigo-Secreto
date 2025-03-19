let listaAmigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nome = inputAmigo.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }

    listaAmigos.push(nome);
    inputAmigo.value = '';

    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let listaElement = document.getElementById('listaAmigos');
    listaElement.textContent = listaAmigos.join(', ');
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio!');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    document.getElementById('resultado').textContent = amigoSorteado;
}

function reiniciarSorteio() {
    listaAmigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('amigo-sorteado').textContent = '';
    document.getElementById('nome-amigo').value = '';
}