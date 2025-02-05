//O principal objetivo deste desafio é fortalecer suas habilidades
// em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = "";
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
        
        const li = document.createElement("li");
        li.textContent = `🎉 O amigo secreto sorteado é: ${sorteado}! 🎁`;
        resultado.appendChild(li);
    } else {
        alert("Adicione pelo menos um nome antes de sortear!");
    }
}
