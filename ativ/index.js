// DECLARAÇÃO DE VARIÁVEIS
var botao = document.getElementById("botao");
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var linhona = document.getElementById("linhona");
var img = document.getElementById("img");
var msgs = document.getElementById("msgs");

// CARREGAMENTO DE TAREFAS NO LOCALSTORAGE
window.onload = function() { //nessa parte do codigo esta carregando as tarefas do localStorage ao carregar a pagina
    carregarTarefas();
}

var tarefas = JSON.parse(localStorage.getItem('tarefas')) || []; //aqui pega as tarefas do localStorage ou cria um array vazio se nao tiver tarefas
var IDTarefas = localStorage.getItem('IDTarefas') || 1; 

//FUNCOES

function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    localStorage.setItem('IDTarefas', IDTarefas); // aqui Salva o contador de IDs
}

function adicionarTarefa(tarefa, completa = false) {
    var id = IDTarefas++; // aqui Gera um novo ID para a tarefa
    var div = document.createElement("div");
    div.classList.add("checkbox-container");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completa;

    var label = document.createElement("label");
    label.textContent = tarefa;

    var imagem = document.createElement("img");
    imagem.src = "/atv2/trash.png";

    imagem.addEventListener("click", function() {
        linhona.removeChild(div);
        removerTarefa(id);
        contagem();
    });

    checkbox.addEventListener("change", function() { //adicionando um evento de mudança no check
        atualizarEstado(id, checkbox.checked);
        contagem();
    });

    label.appendChild(imagem);
    div.appendChild(checkbox);
    div.appendChild(label);
    linhona.appendChild(div);

    tarefas.push({ id: id, text: tarefa, completa: completa });// Adicionando uma nova tarefa ao array de tarefas

    salvarTarefas();
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

function removerTarefa(id) {
    tarefas = tarefas.filter(function(tarefa) { 
        return tarefa.id !== id; //aqui vai retornar as tarefas menos as que devem ser removidas
    });
    salvarTarefas();
}

function atualizarEstado(id, completo) {
    tarefas.forEach(function(tarefa) {
        if (tarefa.id === id) {
            tarefa.completa = completo;
        }
    });
    salvarTarefas();
}

function carregarTarefas() {
    tarefas.forEach(function(tarefa) {
        adicionarTarefa(tarefa.text, tarefa.completa);
    });
}

 