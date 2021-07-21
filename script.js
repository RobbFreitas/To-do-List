// Array para adicionar as tarefas
arrayTarefas = [];

window.onload = function() {
  if (JSON.parse(localStorage.getItem("tarefas")) != null) {
    arrayTarefas = JSON.parse(localStorage.getItem("tarefas"));
  }

  udpateScreen();
};

function adicionar() {
  // Inserir elementos no array e no LocalStorage
  const tarefas = document.getElementById("tarefas").value;

  arrayTarefas.push(tarefas);
  localStorage.setItem("tarefas", JSON.stringify(arrayTarefas));

  udpateScreen();
}

function clearAll(){

    localStorage.clear();
    location.reload();
    
}

function udpateScreen() {
  document.getElementById("lista").innerHTML = "";

  arrayTarefas.forEach((elemento) => {
    // Aqui eu concateno um li, com o elemento for da vez, um a um, dentro dessa template,
    // com <li> abraçando
    document.getElementById("lista").innerHTML += `<li>${elemento}</li>`;
  });
}
