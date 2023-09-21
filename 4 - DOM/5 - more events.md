Certainly! Here are a few more examples of DOM events and how to work with them in JavaScript:

**1. Mouse Events:**

**Exercise: Mouse Hover Effect**
```html
<div id="box"></div>

<script>
  const box = document.getElementById('box');

  box.addEventListener('mouseenter', function () {
    box.style.backgroundColor = 'blue';
  });

  box.addEventListener('mouseleave', function () {
    box.style.backgroundColor = 'red';
  });
</script>
```

In this exercise, when the mouse enters the `box` element, it changes the background color to blue, and when the mouse leaves, it changes it to red.

**2. Keyboard Events:**

**Exercise: Character Counter**
```html
<textarea id="textInput" rows="4" cols="50" placeholder="Type something..."></textarea>
<div id="charCount">Character Count: 0</div>

<script>
  const textInput = document.getElementById('textInput');
  const charCount = document.getElementById('charCount');

  textInput.addEventListener('input', function () {
    const inputText = textInput.value;
    charCount.textContent = `Character Count: ${inputText.length}`;
  });
</script>
```

This exercise counts and displays the number of characters entered into a textarea as the user types.

**3. Form Events:**

**Exercise: Form Validation**
```html
<form id="signupForm">
  <label for="email">Email:</label>
  <input type="email" id="email" required>
  <button type="submit">Sign Up</button>
</form>
<div id="message"></div>

<script>
  const signupForm = document.getElementById('signupForm');
  const message = document.getElementById('message');

  signupForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;

    if (emailValue.includes('@')) {
      message.textContent = 'Sign-up successful!';
    } else {
      message.textContent = 'Please enter a valid email address.';
    }
  });
</script>
```

In this exercise, the form's `submit` event is prevented, and a simple email validation is performed. A message is displayed based on the validation result.

**4. Event Delegation:**

**Exercise: Todo List (with Delegation)**
```html
<h2>To-Do List</h2>
<ul id="todoList">
  <!-- To-do list items will be added here dynamically -->
</ul>
<input type="text" id="newTask" placeholder="Add a new task">
<button id="addTask">Add Task</button>

<script>
  const todoList = document.getElementById('todoList');
  const newTaskInput = document.getElementById('newTask');
  const addTaskButton = document.getElementById('addTask');

  addTaskButton.addEventListener('click', function () {
    const newTaskText = newTaskInput.value.trim();
    if (newTaskText !== '') {
      const newTask = document.createElement('li');
      newTask.textContent = newTaskText;
      todoList.appendChild(newTask);
      newTaskInput.value = '';
    }
  });

  // Event delegation for marking tasks as done
  todoList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('done');
    }
  });
</script>

<style>
  .done {
    text-decoration: line-through;
  }
</style>
```

This is a continuation of the previous to-do list example, but this time, event delegation is used to mark tasks as done when they are clicked. This approach is more efficient when dealing with a large number of elements.

These examples demonstrate how to work with different types of DOM events, including mouse events, keyboard events, form events, and event delegation. Understanding how to handle events is crucial for creating interactive and responsive web applications.