// var img= document.getElementsByClassName("linhona")
var botao= document.getElementById("botao")
botao.addEventListener("click", function() {
    var input= document.getElementById("tarefa").value
    if (input.trim() !==""){
        var p= document.createElement("p")
        p.textContent=input.value
        document.getElementsByClassName("linhona").appendChild(p)
        document.getElementById("tarefa").value=""
    } else {
        alert("Digite uma tarefa")
    }

})





//tentativa2
// botao.addEventListener("click", criarTarefas)
// function criarTarefas() {
//     var pgf= document.createElement("p")
//     var linhona = document.getElementById("linhona").appendChild(pgf)
// }

//tentativa1
// function criarTarefas(){
//     for (var i = 1; i<=3 ; i++) {
//         let tarefas= document.createElement("p")

//         tarefas.textContent="alguma coisa sera add aqui"
        
//         linhona.appendChild(tarefas)
//     }
// }

