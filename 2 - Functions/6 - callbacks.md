Callback functions are commonly used in JavaScript to handle asynchronous operations, events, and other scenarios where you want to execute code after a specific action has completed. Here are some examples of callback functions in action:

1. **Asynchronous Operations (e.g., AJAX Requests):**

   Callback functions are frequently used with asynchronous operations, such as making HTTP requests using the `fetch` API. When the request is complete, the specified callback function is executed.

   ```javascript
   function fetchData(url, callback) {
     fetch(url)
       .then((response) => response.json())
       .then((data) => {
         callback(data); // Execute the callback function with the fetched data
       })
       .catch((error) => {
         console.error(error);
       });
   }

   fetchData('https://api.example.com/data', function (data) {
     console.log(data); // Handle the fetched data
   });
   ```

   In this example, the `fetchData` function takes a URL and a callback function. After fetching the data from the URL, it executes the callback function with the data as an argument.

2. **Event Handling:**

   Callback functions are used extensively for event handling in web development. For example, when a button is clicked, a callback function can be triggered to respond to the click event.

   ```html
   <button id="myButton">Click me</button>

   <script>
     document.getElementById('myButton').addEventListener('click', function () {
       alert('Button clicked!');
     });
   </script>
   ```

   In this case, an anonymous callback function is passed to `addEventListener`, which is executed when the button is clicked.

3. **Timeouts and Intervals:**

   Callback functions can be scheduled to run after a certain delay or repeatedly at specified intervals using `setTimeout` and `setInterval`.

   ```javascript
   function sayHello() {
     console.log('Hello, world!');
   }

   setTimeout(sayHello, 2000); // Executes sayHello after a 2-second delay
   ```

   Here, the `sayHello` function is scheduled to run after a 2-second delay.

4. **ForEach and Array Operations:**

   As mentioned earlier, callback functions are used with array methods like `forEach`, `map`, and `filter` to process data.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];

   numbers.forEach(function (number) {
     console.log(number * 2);
   });
   ```

   In this example, a callback function is provided to the `forEach` method, which multiplies each number in the array by 2.

Callback functions are versatile and powerful tools in JavaScript, allowing you to define custom behavior that executes in response to specific events or conditions. They are central to handling asynchronous operations and improving the overall interactivity and functionality of web applications.