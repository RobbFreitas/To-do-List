// Array para adicionar as tarefas
var arr_tarefas = JSON.parse(localStorage.getItem('arr_tarefas') || '[]');

function adicionar(){

    // Inserir elementos no array e no LocalStorage
    let tarefa = document.getElementById("tarefa").value;
    arr_tarefas.push(tarefa);
    localStorage.setItem("tarefa", JSON.stringify(arr_tarefas));
    
    udpateScreen();
}

function udpateScreen(){

    let takeTasks = JSON.parse(localStorage.getItem("tarefa"));
    
    JSON.stringify(takeTasks);
    document.getElementById("lista").innerHTML = takeTasks;
}