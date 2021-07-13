var arr_tarefas = JSON.parse(localStorage.getItem('arr_tarefas') || '[]');

function adicionar(){

    // Inserir elementos no array e no LocalStorage
    var tarefa = document.getElementById("tarefa").value;
    arr_tarefas.push(tarefa);
    localStorage.setItem("tarefa", arr_tarefas);
    
    // Exibir os dados
    document.getElementById('tarefas', tarefa);
    localStorage.getItem('tarefas');
    document.getElementById('lista').innerHTML = tarefa;

}