// Array para adicionar as tarefas
var arr_tarefas = JSON.parse(localStorage.getItem('tarefa')) || [];

function adicionar(){

    // Inserir elementos no array e no LocalStorage
    let tarefa = document.getElementById("tarefa").value;
    arr_tarefas.push(tarefa);
    localStorage.setItem("tarefa", JSON.stringify(arr_tarefas));

    udpateScreen();
}

function udpateScreen(){

    document.getElementById("lista").innerHTML = "";
    localStorage.getItem("tarefa", arr_tarefas);
    arr_tarefas.forEach((elemento) => {    
        // Aqui eu concateno um li, com o elemento for da vez, um a um, dentro dessa template, 
        // com <li> abraçando    
        document.getElementById("lista").innerHTML += `<li>${elemento}</li>`;  
    });
    
}

