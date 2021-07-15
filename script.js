// Array para adicionar as tarefas
const arrayTarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function adicionar(){

    // Inserir elementos no array e no LocalStorage
    const tarefas = document.getElementById("tarefas").value;

    arrayTarefas.push(tarefas);
    localStorage.setItem("tarefas", JSON.stringify(arrayTarefas));

    udpateScreen();
}

function udpateScreen(){

    document.getElementById("lista").innerHTML = "";

    // const pegarArray = localStorage.getItem("tarefas", JSON.stringify(arrayTarefas))

    arrayTarefas.forEach((elemento) => {    
        // Aqui eu concateno um li, com o elemento for da vez, um a um, dentro dessa template, 
        // com <li> abraçando    
        document.getElementById("lista").innerHTML += `<li>${elemento}</li>`;  
    });
    
}

