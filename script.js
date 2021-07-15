// Array para adicionar as tarefas
var arr_tarefas = JSON.parse(localStorage.getItem('tasks')) || [];

function adicionar(){

    // Inserir elementos no array e no LocalStorage
    let tarefa = document.getElementById("tarefa").value;
    arr_tarefas.push(tarefa);
    localStorage.setItem("tasks", JSON.stringify(arr_tarefas));
    
    udpateScreen();
}

function udpateScreen(){

    let takeTasks = JSON.parse(localStorage.getItem("tasks"));
    
    JSON.stringify(takeTasks);
    document.getElementById("lista").innerHTML = takeTasks;
}

