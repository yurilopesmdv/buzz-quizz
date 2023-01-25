/**** Variáveis globais ****/
const infoBasicas = {
    tituloQuizz: '',
    urlImage: '',
    quantPerguntas: 0,
    quantNiveis: 0,
    infoCorretas: 0,
}

let tituloQuizz = '';
let urlImage = '';
let quantPerguntas = 0;
let quantNiveis = 0;

let quizz = [];



function infoBasicasQuizz(){
    //Quando inserir todas as quatro informações básicas corretamente habilitar o botão para submit


}



//Função para validar a quantidade de niveis no quizz
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
}


//Função para adicionar eventos na página de criação de quizz
function addEventQuizz(){
    document.querySelector('.criarQuizz-form-titulo input').addEventListener('input', validarTituloQuizz);
    document.querySelector('.criarQuizz-form-url input').addEventListener('input', validarUrlQuizz);
    document.querySelector('.criarQuizz-form-quantPerguntas input').addEventListener('input', validarQuantPerguntasQuizz);
    document.querySelector('.criarQuizz-form-quantNiveis input').addEventListener('input', validarQuantNiveisQuizz);
}



