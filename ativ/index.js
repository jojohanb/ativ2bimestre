var botao = document.getElementById("botao");
var span1 = document.getElementById("span1");
var linhona = document.getElementById("linhona");
var img= document.getElementById("img")
var msgs= document.getElementById("msgs")


botao.addEventListener("click", function() {

    var input = document.getElementById("tarefa").value;

    if (input.trim() !== ""){

        var div= document.createElement("div")
        div.className="checkbox-container"

        var checkbox=document.createElement("input")
        checkbox.type="checkbox"

        var label= document.createElement("label")
        label.textContent=input

        var lixo= document.createElement("img")
        lixo.src="/atv2/trash.png"
        label.appendChild(lixo)

        div.appendChild(checkbox)
        div.appendChild(label)

        linhona.appendChild(div)

        // var p = document.createElement("p");
        // p.textContent = input;
        // linhona.appendChild(p);
        document.getElementById("tarefa").value = "";

        span1.textContent = parseInt(span1.textContent) + 1;
        
        img.style.display="none"
        msgs.style.display="none"
    }
    
    else {
        alert("Digite uma tarefa");
    }
});






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

