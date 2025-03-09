//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value;

    if (!nomeAmigo){
        alert("Campo vazio digite o algum nome");
        return;
    }
    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarlista()
}

function atualizarlista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHtml = "";

    for (let i = (amigos.length - 1); i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0){
        alert("Nenhum amigo Adicionado, Favor Adicionar!!!");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;

    let limparLista = document.getElementById("listaAmigos");
    limparLista.innerHTML = "";
}


