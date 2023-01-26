/*const conteudo = document.querySelector('.conteudo');
let quizzesUsuario = [];
let todosQuizzes = [];


function processarQuizzes() {
    conteudo.scrollTo(0, 0);
    console.log('aqui')
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');

    console.log(promise)
    promise.then(renderizarTela1);
    promise.catch(errorGetQuizz); 
}

function errorGetQuizz() {
    alert('Erro ao receber os quizzes, Por favor, recarregue a página.');
}


function renderizarTela1(resposta) {

    const quizzesServidor = resposta.data;
    let quizzSeparado = separaQuizzUsuario(quizzesServidor);
    console.log(quizzSeparado)
    quizzesUsuario = quizzSeparado.usuario;
    todosQuizzes = quizzSeparado.todos;
    //renderizarQuizzes();
}


function separaQuizzUsuario(listaQuizzes) {
    const quizzesSeparados = {
        usuario: [],
        todos: []
    };
    
    for(let i = 0; i < listaQuizzes.length; i++) {
        const quizz = listaQuizzes[i];
        if(quizzEhDoUsuario(quizz)) {
            quizzesSeparados.usuario.push(quizz);
        } else {
            quizzesSeparados.todos.push(quizz);
        }
    }
    return quizzesSeparados;
}


function quizzEhDoUsuario(quizz) {
    const quizzesDoUsuario = getQuizzesLocal();

    for(let i = 0; i < quizzesDoUsuario.length; i++) {
        
        if(quizzesDoUsuario[i].id === quizz.id) {
            return true;
        }
    }
    return false;
}



function getQuizzesLocal() {
    let dadosLocais = localStorage.getItem('quizz');
    if(dadosLocais !== null) {
       const dadosLocaisSalvos = JSON.parse(dados);
        return dadosLocaisSalvos;
    } else {
        return [];
    }
}


function renderizarQuizzes() {
    let divUsuario = '';
    if(quizzesUsuario.length === 0) {
        divUsuario = gerarDivUsuarioVazio();
    } else {
        divUsuario = gerarDivComQuizzUsuario();
    }
    let divTodos = '';
    todosQuizzes.forEach(function (quizz) {
        divTodos += gerarQuizzes();
    });
    conteudo.innerHTML = `
    <div class="header">
        <h1>BuzzQuizz</h1>
    </div>
    <div class="conteudo-tela1">
        ${divUsuario}
        <h2>Todos os Quizzes</h2>
        <div class="div-todos-quizzes">
            ${divTodos}
        </div>
    </div>
    </div>`
}

function gerarDivUsuarioVazio() {
    const divUsuarioVazio = `
        <div class="div-seu-quizz-vazio">
            <p>Você não criou nenhum</br> quizz ainda :(</p>
            <button class="botao-criar-quizz-grande">Criar Quizz</button>
        </div>`;
    return divUsuarioVazio;
}

function gerarDivComQuizzUsuario() {
    let listaQuizzUsuario = '';
    quizzesUsuario .forEach(function (quizz) {
        listaQuizzUsuario += gerarQuizzes();
    });
    return `
            <div class="div-seus-quizzes">
                <div class="titulo-div-seu-quizz">
                    <h2>Seus quizzes</h2>
                    <button class="botao-criar-quizz-peq">+</button>
                </div>
                <div class="lista-seus-quizzes">
                    ${listaQuizzUsuario}
                </div>
            </div>`;
}

function gerarQuizzes(quizz) {
    return `
    <div class="quizz">
        <img src="${quizz.image}">
        <div class="titulo-quizz-tela1">${quizz.title}</div>
    </div>`
}


console.log('oi')
processarQuizzes();*/
