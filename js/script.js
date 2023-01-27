

function gerarDivUsuarioVazio() {
    return `
        <div class="div-seu-quizz-vazio">
            <p>Você não criou nenhum</br> quizz ainda :(</p>
            <button onclick="criarQuizz()" class="botao-criar-quizz-grande">Criar Quizz</button>
        </div>`;
}
function gerarDivComQuizzUsuario() {
    let listaQuizzUsuario = '';
    quizzesUsuario.forEach(function (quizz) {
        listaQuizzUsuario += gerarQuizzes();
    });
    return `
            <div class="div-seus-quizzes">
                <div class="titulo-div-seu-quizz">
                    <h2>Seus quizzes</h2>
                    <button onclick="criarQuizz()" class="botao-criar-quizz-peq">+</button>
                </div>
                <div class="lista-seus-quizzes">
                    ${listaQuizzUsuario}
                </div>
            </div>`;
}
function gerarQuizzes(quizz) {
    return `
    <div class="quizz" onclick="exibirQuizz(${quizz.id}">
        <img src="${quizz.image}">
        <div class="degrade"></div>
        <div class="titulo-quizz-tela1">${quizz.title}</div>
    </div>`
}
processarQuizzes();