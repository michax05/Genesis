// Seleccionar elementos del DOM
const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Función para agregar tarea
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Por favor, escribe una tarea.');
        return;
    }

    // Crear el elemento de la tarea
    const li = document.createElement('li');

    // Crear el texto de la tarea
    const textNode = document.createTextNode(taskText);
    li.appendChild(textNode);

    // Crear botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('delete');
    deleteButton.onclick = function() {
        li.remove();
    };
    li.appendChild(deleteButton);

    // Marcar tarea como completada al hacer clic
    li.onclick = function() {
        li.classList.toggle('completed');
    };

    // Agregar la tarea a la lista
    taskList.appendChild(li);

    // Limpiar el campo de texto después de agregar la tarea
    taskInput.value = '';
}

// Agregar tarea cuando se hace clic en el botón
addButton.addEventListener('click', addTask);

// Agregar tarea presionando la tecla Enter
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});