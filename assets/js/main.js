var input = document.querySelector('.new-task-input');
const botao = document.querySelector('.new-task-button');
var lista = document.querySelector('.tasks-container');

botao.addEventListener('click', function(){
    let valor = input.value.trim();

    if(valor !== ''){
        const createDiv = document.createElement('div');
        createDiv.classList.add('task-item');
    
        const createP = document.createElement('p');
        createP.innerText = valor;
    
        createDiv.appendChild(createP);
        lista.appendChild(createDiv);
        input.value = '';

        const deleteItem = document.createElement("i");
        deleteItem.classList.add("far");
        deleteItem.classList.add("fa-trash-alt");
        
        deleteItem.addEventListener("click", () =>
          handleDeleteClick(createDiv) // Passa o elemento contêiner da tarefa para a função handleDeleteClick
        );

        createDiv.appendChild(deleteItem); // Adiciona o ícone de delete como um filho do contêiner da tarefa

    }else{
        alert("Escreva algo, para poder adicionar a lista");
    }
});

function handleDeleteClick(taskItemContainer) {
  // Remove o elemento contêiner da tarefa (a tarefa inteira) da lista
  lista.removeChild(taskItemContainer);

  updateLocalStorage(); // Atualiza o armazenamento local após a exclusão
}
