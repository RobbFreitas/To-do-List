var arr_tarefas = JSON.parse(localStorage.getItem('arr_tarefas') || '[]');

function adicionar(){

    // Inserir elementos no array e no LocalStorage
    let tarefa = document.getElementById("tarefa").value;
    arr_tarefas.push(tarefa);
    localStorage.setItem("tarefa", arr_tarefas);
    
    udpateScreen();
}

function udpateScreen(){

    let takeTasks = (localStorage.getItem("tarefa", arr_tarefas));
    console.log(localStorage.getItem("tarefa"));
    document.getElementById("lista").innerHTML = takeTasks;
}