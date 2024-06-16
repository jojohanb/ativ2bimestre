  // DECLARACAO DE VARIÁVEIS
  var botao = document.getElementById("botao");
  var span1 = document.getElementById("span1");
  var span2 = document.getElementById("span2");
  var linhona = document.getElementById("linhona");
  var img = document.getElementById("img");
  var msgs = document.getElementById("msgs");

  // FUNCOES
  function adicionarTarefa(tarefa) {
      var div = document.createElement("div");
      div.classList.add("checkbox-container"); //aqui adiciona um classe ao elemento

      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      var label = document.createElement("label");
      label.textContent = tarefa;

      var imagem = document.createElement("img");
      imagem.src = "/atv2/trash.png";

      imagem.addEventListener("click", function() {
          linhona.removeChild(div);
          contagem();
      });

      checkbox.addEventListener("change", function() { //aqui o evento change é acionado pela marcacao da checkboxs
          contagem();
      });

      label.appendChild(imagem);
      div.appendChild(checkbox);
      div.appendChild(label);
      linhona.appendChild(div);

      contagem();
  }

  botao.addEventListener("click", function() {
      var input = document.getElementById("tarefa").value.trim();

      if (input !== "") {
          adicionarTarefa(input);
          document.getElementById("tarefa").value = "";
      } else {
          alert("Digite uma tarefa.");
      }
  });

  function contagem() {
      var totalTarefas = document.querySelectorAll('.checkbox-container').length;
      var tarefasCompletas = document.querySelectorAll('.checkbox-container input[type="checkbox"]:checked').length;

      span1.textContent = totalTarefas;
      span2.textContent = `${tarefasCompletas}/${totalTarefas}`;

      if (totalTarefas === 0) {
          img.style.display = "block";
          msgs.style.display = "block";
      } else {
          img.style.display = "none";
          msgs.style.display = "none";
      }
  }


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



