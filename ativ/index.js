var input= document.getElementById("tarefa")
var botao= document.getElementById("botao")
var img= document.getElementsByClassName("linhona")


botao.addEventListener("click", criarTarefas)

function criarTarefas(){
    for (var i = 1; i<=3 ; i++) {
        let tarefas= document.createElement("p")

        tarefas.textContent="alguma coisa sera add aqui"
        
        linhona.appendChild(tarefas)
    }
}

