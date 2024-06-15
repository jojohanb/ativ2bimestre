//DECLARANDO VARIAVEIS
var botao = document.getElementById("botao");
var span1 = document.getElementById("span1");
var span2= document.getElementById("span2")
var linhona = document.getElementById("linhona");
var img = document.getElementById("img");
var msgs = document.getElementById("msgs");
var input = document.getElementById("tarefa").value;

//FUNCOES
botao.addEventListener("click", function() {
    if (input.trim() !== " ") {
        var div = document.createElement("div");
        div.classList.add("checkbox-container");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        var label = document.createElement("label");
        label.textContent = input;
        label.insertAdjacentHTML("beforeend", '<img src="/atv2/trash.png" alt="Excluir">');

        label.querySelector("img").addEventListener("click", function() {
        linhona.removeChild(div);
        span1.textContent = parseInt(span1.textContent) - 1;

    if (parseInt(span1.textContent) === 0) {
        img.style.display = "block";
         msgs.style.display = "block";
         }
            });

                div.appendChild(checkbox);
                div.appendChild(label);

                linhona.appendChild(div);
                document.getElementById("tarefa").value = "";
                span1.textContent = parseInt(span1.textContent) + 1;

                if (img && msgs) {
                    img.style.display = "none";
                    msgs.style.display = "none";
                }
            } else {
                alert("Digite uma tarefa");
            }
        });

        // function salvarTarefas (){
        //     var tarefas= []
        //     var containers= documente.querySelector(".checkbox-container")
        //     for (var i=0; i< containers.length; i++ ){  //itera sobre cada container e extrai o texto e o estado do checkbox 
        //         var container= containers[i]
        //         var text= container.querySelector("label").textContent.trim()
        //         var checked= container.querySelector('input[type= "checkbox"]').checked
        //         tarefas.úsh({ text:text, checked: checked})
        //         localStorage.setItem('tarefas', JSON.stringify(tarefas)) //conventendo em str e armazenando a str no localstorage

            // } 
            // document.querySelectorAll(".checkbox-container").forEach(function(container)) { //aqui esta pegando todos os elementos da classe e iterando sobre cada um deles e executando a funcao fornecida com o parametro container
            //     var tarefa = {
            //         texto: container.querySelector("label").textContent,
            //         concluido: container.querySelector("input[type=checkbox]").checked
            //     };
            //     tarefas.push(tarefa);
            // }

            // document.querySelector(".checkbox-container").forEach (function(container)) {} //aqui esta pegando todos os elementos da classe e iterando sobre cada um deles e executando a funcao fornecida com o parametro container
        // }


        // function carregarTarefas() { 
        //     var tarefas= JSON.parse(localStorage.getItem("tarefas")) ||[]
        //     for (var i=0; i< tarefas.length; i++){
        //         var tarefa= tarefas[i]
        //         adicionarTarefa(tarefa.text, tarefa.checked) // itera sobre cada tarefa no array e chama a funcao{adicionartarefas} com o texto da tarefa e seu estado checado

        //     }
        //     // var tarefas= JSON.parse(localStorage.getItem("tarefas")) || [] //pega as tarefas salvas do localstorage e converte para um array de objs novamente 


        // }

        // function adicionarTarefa(text, checked= false){ 
        // }



