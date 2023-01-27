/**** Variáveis globais ****/
let quantPerguntas = 0;
let quantNiveis = 0;

const quizz = {
    title: '',
    image:'',
    questions:[],
    levels: [],
}


//Função que preenche o atributo questions do quizz
const preencheQuestions = (objetoQuestion) => quizz.questions.push(objetoQuestion);


function renderizaNiveisQuizz(){
    //Função para renderizar os níveis do quizz
}


//Função para armazenar as perguntas em caso de sucesso nas validações
function preencheQuizzPerguntas(entradas){
    //Parâmetro 'entradas' armazena todos os valores de input de cada pergunta individualmente
    const question = {
        title: entradas[0].value,
        color: entradas[1].value,
        answers: [],
    }
    //primeira resposta inserida é a resposta correta
    for (let i = 2; i < entradas.length; i+=2){
        const answer = {
            text: entradas[i].value,
            image: entradas[i+1].value,
            isCorrectAnswer: false,
        }
        //Primeira questão é a correta
        if( i === 2 ){
            answer.isCorrectAnswer = true;
        }
        //Garantir que só será copiado se o par pergunta + URL for digitado (para das respostas que não são obrigatórias)
        if( entradas[i].value !== '' && entradas[i+1].value !== ''){
            question.answers.push(answer);
        }
    }
    preencheQuestions(question);
    renderizaNiveisQuizz();
}


//Função auxiliar. Verificar se todas as validações foram verificadas
function submitPerguntasQuizz(){
    if( checkInput() && checkInputValidados() ){
        //NodeList com todas as perguntas preenchidas
        const todasPerguntas = document.querySelectorAll('.criarQuizz-pergunta')
        
        for(let i = 0; i < todasPerguntas.length; i++){
            preencheQuizzPerguntas( todasPerguntas[i].querySelectorAll('input') );
        }
    }
}


//Função que verifica se todos os inputs foram preenchidos corretamente
function checkInputValidados(){
    if(document.querySelector('.invalido') === null){
        return true;
    }
    return false;
}


//Função que verifica se os inputs obrigatórios foram preenchidos antes de armazenar informações
function checkInput(){
    const inputObrigatorios = document.querySelectorAll('[required]');

    for(let i in inputObrigatorios){
        if(inputObrigatorios[i].value === ''){
            return false;
        }
    }
    return true;
}


/////////////////////////////////////            Validação das perguntas do quizz          ///////////////////////////////////

//Função para validar a quantidade de caracteres na pergunta
function validarPergunta(pergunta){
    const divPai = pergunta.parentNode;
    const quantCaracterMinPergunta = 20;

    if(pergunta.value.length < quantCaracterMinPergunta){
        divPai.classList.add('invalido');
    } else {
        divPai.classList.remove('invalido');
    }
}

//Função para validar cor hexadecimal
function validarCor(cor){
    const divPai = cor.parentNode;

    let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

    if( regex.test(cor.value) === true){
        divPai.classList.remove('invalido');
    } else {
        divPai.classList.add('invalido');
    }   
}

function validarURL(url){
    const divPai = url.parentNode;

    if (isUrl(url.value)){
        divPai.classList.remove('invalido');
    } else {
        divPai.classList.add('invalido');
    }
}


////////////////////////////// Função para renderizar a página de criação das perguntas do quizz ///////////////////////////////////

function submitInfoBasicasQuizz(){
    //renderizar tela 3.2
    const tela = document.querySelector('.criarQuizz');

    tela.innerHTML = `
        <div class="criarQuizz-header">
            <h2>Crie suas perguntas</h2>
        </div>`;
    
    for( let i = 1; i <= quantPerguntas; i++){
        if(i === 1){
            tela.innerHTML += `
            <div class="selecionado">
                <div class="criarQuizz-pergunta">
                    <div class="criarQuizz-form">
                        <h2>Pergunta ${i}</h2>
                        <div>
                            <input type="text" placeholder="Texto da pergunta" onchange="validarPergunta(this)" required>
                            <span>Deve ter no mínimo 20 caracteres</span>
                        </div>
                    </div>
                    <div class="criarQuizz-form">
                        <div>
                            <input type="text" placeholder="Cor de fundo da pergunta. Ex: #FAFAFA" onchange="validarCor(this)" required>
                            <span>Cor deve ser no formato hexadecimal</span>
                        </div>
                    </div>
                    <hr>
                    <div class="criarQuizz-form">
                        <h2>Resposta correta</h2>
                        <div>
                            <input type="text" placeholder="Resposta correta" required>
                            <span>Deve ser inserido uma resposta correta</span>
                        </div>
                    </div>
                    <div class="criarQuizz-form">
                        <div>
                            <input type="url" placeholder="URL da resposta correta" onchange="validarURL(this)" required>
                            <span>URL inválida</span>
                        </div>
                    </div>
                    <hr>
                    <div class="criarQuizz-form">
                        <h2>Respostas incorretas</h2>
                        <div>
                            <input type="text" placeholder="Resposta incorreta 1" required>
                            <span>Deve ser inserido pelo menos uma resposta incorreta</span>
                        </div>
                    </div>
                    <div class="criarQuizz-form">
                        <div>
                            <input type="url" placeholder="URL da imagem 1" onchange="validarURL(this)" required>
                            <span>URL inválida</span>
                        </div>
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
                <div class="criarQuizz-pergunta">
                    <div class="criarQuizz-form">
                        <h2>Pergunta ${i}</h2>
                        <div>
                            <input type="text" placeholder="Texto da pergunta" onchange="validarPergunta(this)" required>
                            <span>Deve ter no mínimo 20 caracteres</span>
                        </div>
                    </div>
                    <div class="criarQuizz-form">
                        <div>
                            <input type="text" placeholder="Cor de fundo da pergunta. Ex: #FAFAFA" onchange="validarCor(this)" required>
                            <span>Cor deve ser no formato hexadecimal</span>
                        </div>
                    </div>
                    <hr>
                    <div class="criarQuizz-form">
                        <h2>Resposta correta</h2>
                        <div>
                            <input type="text" placeholder="Resposta correta" required>
                            <span>Deve ser inserido uma resposta correta</span>
                        </div>
                    </div>
                    <div class="criarQuizz-form">
                        <div>
                            <input type="url" placeholder="URL da resposta correta" required>
                            <span>URL inválida</span>
                        </div>
                    </div>
                    <hr>
                    <div class="criarQuizz-form">
                        <h2>Respostas incorretas</h2>
                        <div>
                            <input type="text" placeholder="Resposta incorreta 1" required>
                            <span>Deve ser inserido pelo menos uma resposta incorreta</span>
                        </div>
                    </div>
                    <div class="criarQuizz-form">
                        <div>
                            <input type="url" placeholder="URL da imagem 1" onchange="validarURL(this)" required>
                            <span>URL inválida</span>
                        </div>
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
            <button class="btn-red" type="submit" name="button" onclick="submitPerguntasQuizz()">
                Prosseguir para criar níveis
            </button>
            <hr><hr>
        </div>
    `;
}

//Função para navegar na página de criação das perguntas do quizz
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


////////////////////////////////////    INFORMAÇÕES BÁSICAS DO QUIZZ      ///////////////////////////////////////////

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
    quantNiveis = target.value;
    const quantNiveisMin = 2;

    const quantNiveisAlerta = document.querySelector('.criarQuizz-form-quantNiveis');

    if( quantNiveis < quantNiveisMin || isNaN(quantNiveis) ){
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
    quantPerguntas = target.value;
    const quantPerguntasMin = 3;

    const quantPerguntasAlerta = document.querySelector('.criarQuizz-form-quantPerguntas');

    if( quantPerguntas < quantPerguntasMin || isNaN(quantPerguntas)){
        quantPerguntasAlerta.classList.remove('valido');
        quantPerguntasAlerta.classList.add('invalido');
    } else {
        quantPerguntasAlerta.classList.remove('invalido');
        quantPerguntasAlerta.classList.add('valido');
    }
    verificarTodasInfoBasicasQuizz();
}


//Função para validar uma url
function isUrl(urlString){
    //Recebe uma string e se conseguir instanciar vamos considerar válido
    try {
        let url = new URL(urlString);
        return true;

    } catch (erro) {
        return false;
    }
}

function validarUrlQuizz({target}){
    //url no formato de string
    quizz.image = target.value;

    const urlAlerta = document.querySelector('.criarQuizz-form-url');
    
    if (isUrl(quizz.image)){
        urlAlerta.classList.remove('invalido');
        urlAlerta.classList.add('valido');
    } else {
        urlAlerta.classList.remove('valido');
        urlAlerta.classList.add('invalido');
    }
    verificarTodasInfoBasicasQuizz();
}


//Função para validar o título do quizz
function validarTituloQuizz({target}){
    quizz.title = target.value;
    const caracterMax = 65;
    const caracterMin = 20;
    const tituloAlerta = document.querySelector('.criarQuizz-form-titulo');

    if( quizz.title.length < caracterMin || quizz.title.length > caracterMax ){
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