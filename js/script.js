function renderizarTela1() {
   document.body.innerHTML = ` <div class="tela1">
   <div class="header">
       <h1>BuzzQuizz</h1>
   </div>
   <div class="conteudo-tela1">
       <div class="div-seus-quizzes">
           <p>Você não criou nenhum</br> quizz ainda :(</p>
           <button class="botao-criar-quizz">Criar Quizz</button>
       </div>
       <h2>Todos os Quizzes</h2>
       <div class="div-todos-quizzes">
           <div class="quizz"></div>
           <div class="quizz"></div>
           <div class="quizz"></div>
           <div class="quizz"></div>
           <div class="quizz"></div>
           <div class="quizz"></div>
       </div>
   </div>
</div>`
}
