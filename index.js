// Get the todo list from local storage
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

// Function to add a new item to the todo list
function addItem() {
  // Get the new item input element and its value
  const newItemInput = document.getElementById('new-item');
  const newItemValue = newItemInput.value.trim();

  // Check if the input value is not empty
  if (newItemValue !== '') {
    // Add the new item to the beginning of the todo list
    todoList.unshift(newItemValue);
    // Update the todo list on the web page
    updateTodoList();
    // Reset the new item input field
    newItemInput.value = '';
    // Store the updated todo list in local storage
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }
}

// Function to remove an item from the todo list
function removeItem(index) {
  // Remove the item at the given index from the todo list
  todoList.splice(index, 1);
  // Update the todo list on the web page
  updateTodoList();
  // Store the updated todo list in local storage
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

// Function to update an item in the todo list
function editItem(index) {
  // Prompt the user to enter the new item value
  const newValue = prompt('Enter new value:');
  // Check if the user entered a value and update the todo list accordingly
  if (newValue !== null && newValue.trim() !== '') {
    todoList[index] = newValue.trim();
    // Update the todo list on the web page
    updateTodoList();
    // Store the updated todo list in local storage
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }
}

// Function to update the todo list on the web page
function updateTodoList() {
  // Get the todo list element and clear its content
  const todoListElement = document.getElementById('todo-list');
  todoListElement.innerHTML = '';
  // Loop through the todo list and create a new li element for each item
  todoList.forEach((item, index) => {
    const liElement = document.createElement('li');
    liElement.textContent = item;
    // Create buttons to remove or edit the item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeItem(index));
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editItem(index));
    // Add the buttons to the li element
    liElement.appendChild(removeButton);
    liElement.appendChild(editButton);
    // Add the li element to the todo list element
    todoListElement.appendChild(liElement);
  });
}

// Call the updateTodoList function to initially update
