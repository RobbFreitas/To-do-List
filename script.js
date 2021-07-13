var task = [];

function adicionar(){

    var tarefa = document.getElementById("task").value;

    task.push(task);

    var taskList = localStorage.setItem("task", task);

    console.log((tarefa));

    document.getElementById("lista").innerHTML = localStorage.getItem("task");
    
}