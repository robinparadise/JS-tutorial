**Creating & Removing Elements:**

Creating and removing elements in the DOM is essential for dynamically updating web pages. Here's a quick recap of creating and removing elements:

**Creating Elements:**

```javascript
// Create a new element
const newElement = document.createElement('div');

// Set attributes (optional)
newElement.id = 'myDiv';
newElement.className = 'my-class';

// Set content (optional)
newElement.textContent = 'Hello, World!';

// Append the element to the DOM
const parentElement = document.getElementById('parent');
parentElement.appendChild(newElement);
```

**Removing Elements:**

```javascript
const parentElement = document.getElementById('parent');
const childElement = document.getElementById('myDiv'); // Element to remove

// Remove the child element from the parent
parentElement.removeChild(childElement);
```

**Event Bubbling (and delegation):**

Event bubbling is a fundamental concept in the DOM that describes the order in which events are propagated through the DOM tree. When an event occurs on a nested element, it also triggers the same event on its parent elements, bubbling up to the document root.

Event delegation is a technique that takes advantage of event bubbling. Instead of attaching an event listener to each individual element, you can attach a single event listener to a common ancestor element (often the parent), and then use the `event.target` property to determine which specific child element triggered the event.

Here's an example of event delegation:

```html
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  const myList = document.getElementById('myList');

  myList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
      console.log('Clicked on', event.target.textContent);
    }
  });
</script>
```

In this example, a single click event listener is attached to the `<ul>` element. When a `<li>` element is clicked, the event bubbles up to the `<ul>`, and the event handler checks if the target element's tag name is 'LI'. If it is, the clicked list item's text is logged to the console.

**Exercise Example:**

**Exercise: Toggle List Items**

```html
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<button id="toggleButton">Toggle Items</button>

<script>
  const myList = document.getElementById('myList');
  const toggleButton = document.getElementById('toggleButton');

  toggleButton.addEventListener('click', function () {
    // Loop through all <li> elements and toggle their visibility
    const listItems = myList.querySelectorAll('li');
    listItems.forEach(function (item) {
      if (item.style.display === 'none' || item.style.display === '') {
        item.style.display = 'list-item';
      } else {
        item.style.display = 'none';
      }
    });
  });
</script>
```

In this exercise, we have a list of items and a button. When the button is clicked, the event listener uses event delegation to toggle the visibility of list items (show or hide) by changing their `display` style property. This is a practical example of event delegation and DOM manipulation.


Exercises that involve working with the DOM and event handling:

**Exercise: Dynamic List**
```html
<ul id="myList">
  <!-- List items will be added here dynamically -->
</ul>

<input type="text" id="newItem" placeholder="Add a new item">
<button id="addItem">Add Item</button>

<script>
  const myList = document.getElementById('myList');
  const newItemInput = document.getElementById('newItem');
  const addItemButton = document.getElementById('addItem');

  addItemButton.addEventListener('click', function () {
    const newItemText = newItemInput.value.trim();
    if (newItemText !== '') {
      const newItem = document.createElement('li');
      newItem.textContent = newItemText;
      myList.appendChild(newItem);
      newItemInput.value = '';
    }
  });
</script>
```
This exercise lets you add new list items dynamically by entering text in the input field and clicking the "Add Item" button.

**Exercise: Color Changer**
```html
<div id="colorBox"></div>
<button id="changeColor">Change Color</button>

<script>
  const colorBox = document.getElementById('colorBox');
  const changeColorButton = document.getElementById('changeColor');

  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33E1', '#33B5FF'];

  changeColorButton.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    colorBox.style.backgroundColor = randomColor;
  });
</script>
```
This exercise allows you to change the background color of a box by clicking a button. It uses an array of predefined colors.

**Exercise: To-Do List**
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

  // Mark completed tasks as done when clicked
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
This exercise creates a simple to-do list. You can add tasks by entering text in the input field and clicking the "Add Task" button. Completed tasks are marked with a line-through style.

These exercises cover common DOM manipulation and event handling scenarios and are great for practicing your JavaScript skills in a real-world context.