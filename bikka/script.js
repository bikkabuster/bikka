document.getElementById('addTaskBtn').addEventListener('click', function () {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  // Get the task value
  const taskValue = taskInput.value.trim();
  if (taskValue === '') return alert('Please enter a task.');

  // Create a new list item
  const li = document.createElement('li');
  li.textContent = taskValue;

  // Add delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear the input
  taskInput.value = '';
});
