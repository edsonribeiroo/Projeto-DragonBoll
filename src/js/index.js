// Seleciona todos os botões e personagens
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

// Função para remover a classe "selecionado" de um elemento
function removerSelecionado(seletor) {
    const elementoSelecionado = document.querySelector(seletor);
    if (elementoSelecionado) {
        elementoSelecionado.classList.remove("selecionado");
    }
}

// Função para adicionar a classe "selecionado" a um elemento
function adicionarSelecionado(elemento) {
    elemento.classList.add("selecionado");
}

// Função para lidar com o clique no botão
function aoClicarBotao(indice) {
    // Remove a seleção do botão e do personagem previamente selecionados
    removerSelecionado(".botao.selecionado");
    removerSelecionado(".personagem.selecionado");

    // Adiciona a classe "selecionado" ao botão e ao personagem correspondente
    adicionarSelecionado(botoes[indice]);
    adicionarSelecionado(personagens[indice]);
}

// Adiciona o evento de clique a cada botão
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => aoClicarBotao(indice));
});