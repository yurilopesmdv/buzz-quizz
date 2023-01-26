/**** Variáveis globais ****/
const infoBasicas = {
    tituloQuizz: 'Michael',
    urlImage: 'https://urlimagem',
    quantPerguntas: 0,
    quantNiveis: 0,
}

let quizz = {
    title: '',
    image:'',
    questions:[],
    levels: [],
}

let question = {
    title: '',
    color: '',
    answers: [],
}

const answer = {
    text: '',
    image: '',
    isCorrectAnswer: false,
}

let questions = [];

let answers = [];


const preencheAnswers = (objetoAns) => answers.push(objetoAns);



function mostrarPergunta(iconSelecionado){
    //Quando clicar no icon só vai vir a caixinha do icone, dai pegamos o box pai para adicionar a classe 'selecionado'
    const perguntaSelecionada = iconSelecionado.parentNode.parentNode;
    
    const boxAtualmenteSelecionada = document.querySelector('.selecionado');

    //Antes de adicionar a classe no icone escolhido, vamos remover a já existente.
    boxAtualmenteSelecionada.classList.add('hidden');
    boxAtualmenteSelecionada.classList.remove('selecionado');

    perguntaSelecionada.classList.remove('hidden');
    perguntaSelecionada.classList.add('selecionado');
}


//////////////////////////////  Função para renderizar a página de criação das perguntas do quizz ///////////////////////////////////

function submitInfoBasicasQuizz(){
    //renderizar tela 3.2
    const tela = document.querySelector('.criarQuizz');

    tela.innerHTML = `
        <div class="criarQuizz-header">
            <h2>Crie suas perguntas</h2>
        </div>`;
    
    for( let i = 1; i <= infoBasicas.quantPerguntas; i++){
        if(i === 1){
            tela.innerHTML += `
            <div class="selecionado">
                <div class="criarQuizz-main">
                    <div class="criarQuizz-form">
                        <h2>Pergunta ${i}</h2>
                        <div><input type="text" placeholder="Texto da pergunta"></div>
                    </div>
                    <div class="criarQuizz-form">
                        <div><input type="text" placeholder="Cor de fundo da pergunta"></div>
                    </div>
                    <hr>
                    <div class="criarQuizz-form">
                        <h2>Resposta correta</h2>
                        <div><input type="text" placeholder="Resposta correta"></div>
                    </div>
                    <div class="criarQuizz-form">
                        <div><input type="text" placeholder="URL da resposta correta"></div>
                    </div>
                    <hr>
                    <div class="criarQuizz-form">
                        <h2>Respostas incorretas</h2>
                        <div><input type="text" placeholder="Resposta incorreta 1"></div>
                    </div>
                    <div class="criarQuizz-form">
                        <div><input type="text" placeholder="URL da imagem 1"></div>
                    </div>
                    <hr>
                    <div class="criarQuizz-form">
                        <div><input type="text" placeholder="Resposta incorreta 2"></div>
                    </div>
                    <div class="criarQuizz-form">
                        <div><input type="text" placeholder="URL da imagem 2"></div>
                    </div>
                    <hr>
                    <div class="criarQuizz-form">
                        <div><input type="text" placeholder="Resposta incorreta 3"></div>
                    </div>
                    <div class="criarQuizz-form">
                        <div><input type="text" placeholder="URL da imagem 3"></div>
                    </div>   
                </div>
                <div class="box-pergunta-resumida">
                    <h2>Pergunta ${i}</h2>
                    <ion-icon onclick="mostrarPergunta(this)" name="create-outline"></ion-icon>
                </div>
            </div>`; 
        } else {
            tela.innerHTML += `
            <div class="hidden">
                <div class="criarQuizz-main">
                    <div class="criarQuizz-form">
                        <h2>Pergunta ${i}</h2>
                        <div><input type="text" placeholder="Texto da pergunta"></div>
                    </div>
                    <div class="criarQuizz-form">
                        <div><input type="text" placeholder="Cor de fundo da pergunta"></div>
                    </div>
                    <hr>
                    <div class="criarQuizz-form">
                        <h2>Resposta correta</h2>
                        <div><input type="text" placeholder="Resposta correta"></div>
                    </div>
                    <div class="criarQuizz-form">
                        <div><input type="text" placeholder="URL da resposta correta"></div>
                    </div>
                    <hr>
                    <div class="criarQuizz-form">
                        <h2>Respostas incorretas</h2>
                        <div><input type="text" placeholder="Resposta incorreta 1"></div>
                    </div>
                    <div class="criarQuizz-form">
                        <div><input type="text" placeholder="URL da imagem 1"></div>
                    </div>
                    <hr>
                    <div class="criarQuizz-form">
                        <div><input type="text" placeholder="Resposta incorreta 2"></div>
                    </div>
                    <div class="criarQuizz-form">
                        <div><input type="text" placeholder="URL da imagem 2"></div>
                    </div>
                    <hr>
                    <div class="criarQuizz-form">
                        <div><input type="text" placeholder="Resposta incorreta 3"></div>
                    </div>
                    <div class="criarQuizz-form">
                        <div><input type="text" placeholder="URL da imagem 3"></div>
                    </div>   
                </div>
                <div class="box-pergunta-resumida">
                    <h2>Pergunta ${i}</h2>
                    <ion-icon onclick="mostrarPergunta(this)" name="create-outline"></ion-icon>
                </div>
            </div>`;
        }
        tela.innerHTML += `<hr>`;
    }
    tela.innerHTML += `
        <div>
            <button class="btn-red" type="submit" name="button" onclick="submitInfoBasicasQuizz()" disabled>
                Prosseguir para criar níveis
            </button>
            <hr><hr><hr><hr><hr><hr><hr>
        </div>
    `;
}



///////////////////////////////  INFORMAÇÕES BÁSICAS DO QUIZZ  ///////////////////////////////////////////

//Função para habilitar o botão de submit das informações básicas do quizz
function verificarTodasInfoBasicasQuizz(){
    //Quando inserir todas as quatro informações básicas corretamente habilitar o botão para submit
    const totalInfoCorretas = 4;
    const button = document.querySelector('.criarQuizz button');

    if(document.querySelectorAll('.valido').length === totalInfoCorretas){
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '');
}


//Função para validar a quantidade de niveis no quizz
//OBS: classe 'valido' usada apenas para controle das informações válidas que forem inseridas
function validarQuantNiveisQuizz({target}){
    infoBasicas.quantNiveis = target.value;
    const quantNiveisMin = 2;

    const quantNiveisAlerta = document.querySelector('.criarQuizz-form-quantNiveis');

    if( infoBasicas.quantNiveis < quantNiveisMin || isNaN(infoBasicas.quantNiveis) ){
        quantNiveisAlerta.classList.remove('valido');
        quantNiveisAlerta.classList.add('invalido');

    } else {
        quantNiveisAlerta.classList.remove('invalido');
        quantNiveisAlerta.classList.add('valido');
    }
    verificarTodasInfoBasicasQuizz();
}



//Função para validar a quantidade de perguntas no quizz
function validarQuantPerguntasQuizz({target}){
    infoBasicas.quantPerguntas = target.value;
    const quantPerguntasMin = 3;

    const quantPerguntasAlerta = document.querySelector('.criarQuizz-form-quantPerguntas');

    if( infoBasicas.quantPerguntas < quantPerguntasMin || isNaN(infoBasicas.quantPerguntas)){
        quantPerguntasAlerta.classList.remove('valido');
        quantPerguntasAlerta.classList.add('invalido');
    } else {
        quantPerguntasAlerta.classList.remove('invalido');
        quantPerguntasAlerta.classList.add('valido');
    }
    verificarTodasInfoBasicasQuizz();
}


//Função para validar uma url
function validarUrlQuizz({target}){
    //url no formato de string
    infoBasicas.urlImage = target.value;

    const urlAlerta = document.querySelector('.criarQuizz-form-url');
    
    try {
        //Converter para o formato de objeto URL
        let url = new URL(infoBasicas.urlImage);
        urlAlerta.classList.remove('invalido');
        urlAlerta.classList.add('valido');

    } catch (erro) {
        urlAlerta.classList.remove('valido');
        urlAlerta.classList.add('invalido');
    }
    verificarTodasInfoBasicasQuizz();
}


//Função para validar o título do quizz
function validarTituloQuizz({target}){
    infoBasicas.tituloQuizz = target.value;
    const caracterMax = 65;
    const caracterMin = 20;
    const tituloAlerta = document.querySelector('.criarQuizz-form-titulo');

    if( infoBasicas.tituloQuizz.length < caracterMin || infoBasicas.tituloQuizz.length > caracterMax ){
        tituloAlerta.classList.remove('valido');
        tituloAlerta.classList.add('invalido');

    } else {
        tituloAlerta.classList.remove('invalido');
        tituloAlerta.classList.add('valido');
    }
    verificarTodasInfoBasicasQuizz();
}


//Função para adicionar eventos na página de criação de quizz
function addEventQuizz(){
    document.querySelector('.criarQuizz-form-titulo input').addEventListener('input', validarTituloQuizz);
    document.querySelector('.criarQuizz-form-url input').addEventListener('input', validarUrlQuizz);
    document.querySelector('.criarQuizz-form-quantPerguntas input').addEventListener('input', validarQuantPerguntasQuizz);
    document.querySelector('.criarQuizz-form-quantNiveis input').addEventListener('input', validarQuantNiveisQuizz);
}