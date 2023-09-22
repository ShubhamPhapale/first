import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {
  questionsAndAnswers = [
    {
      question: 'What is REST API?',
      buttonname: 'Show Answer',
      answer:
        'A REST API, which stands for Representational State Transfer Application Programming Interface, is a set of rules and conventions for building and interacting with web services. REST is an architectural style for designing networked applications. RESTful APIs are a type of web API that adhere to the principles of REST.',
      show: false,
    },
    {
      question: 'What are HTTP and HTTPS protocols? Explain in detail the following HTTP methods:',
      buttonname: 'Show Answer',
      answer:
        '<ul>' +
        '  <li><b>GET:</b> The HTTP GET method is used to retrieve data from a specified resource. It requests data from a server and does not have any side effects on the server. It is idempotent, meaning multiple identical requests will produce the same result as a single request.</li>' +
        '  <li><b>POST:</b> The HTTP POST method is used to submit data to be processed to a specified resource. It is often used for creating new resources on the server. Unlike GET, POST requests can have side effects on the server and are not idempotent.</li>' +
        '  <li><b>PUT:</b> The HTTP PUT method is used to update a resource or create it if it doesn\'t exist at a specified URL. It is idempotent, meaning making the same PUT request multiple times will have the same effect as a single request.</li>' +
        '  <li><b>DELETE:</b> The HTTP DELETE method is used to request the removal of a resource identified by a specific URL. It deletes the resource if it exists. Like GET, DELETE is idempotent.</li>' +
        '</ul>',
      show: false,
    },
    {
      question: 'Explain the following with a component diagram (PNG image): 3-tier architecture',
      buttonname: 'Show Answer',
      answer:
        '3-tier architecture is a software architecture pattern that divides an application into three interconnected tiers or layers, each responsible for a specific aspect of functionality. These tiers are:\n' +
        '<ul>' +
        '   <li>Presentation Tier (User Interface):</li>' +
        '   <ul>' +
        '       <li>This is the top layer that interacts directly with users.</li>' +
        '       <li>It includes components for user interaction, such as web pages, user interfaces, and mobile app interfaces.</li>' +
        '       <li>Its primary goal is to present information to users and collect user inputs.</li>' +
        '   </ul>' +
        '</ul>' +
        '<ul>' +
        '   <li>Application Tier (Business Logic):</li>' +
        '   <ul>' +
        '       <li>Also known as the logic tier or middle tier.</li>' +
        '       <li>This layer contains the business logic and application functionality.</li>' +
        '       <li>It processes requests from the presentation tier, performs necessary computations, and interacts with the data tier.</li>' +
        '       <li>It enforces business rules and ensures data consistency.</li>' +
        '   </ul>' +
        '</ul>' +
        '<ul>' +
        '   <li>Data Tier (Database):</li>' +
        '   <ul>' +
        '       <li>The bottom layer is responsible for data storage and retrieval.</li>' +
        '       <li>It includes databases or other data storage mechanisms.</li>' +
        '       <li>The data tier stores and manages data, making it available to the application tier when requested.</li>' +
        '       <li>It often includes database management systems (DBMS) for efficient data handling.</li>' +
        '   </ul>' +
        '</ul>' +
        'In a 3-tier architecture, each tier has a specific role and communicates with the other tiers through well-defined interfaces. This separation of concerns enhances scalability, maintainability, and flexibility in software development.\n\n' +
        'Please view the 3-tier architecture diagram image below: <img src="https://www.zirous.com/wp-content/uploads/2022/10/Untitled-5-01.png" alt="3-tier Architecture Diagram" class="answer-image" width="100%">',
      show: false,
    },    
    
    {
      question: 'What are different array methods in JavaScript? Explain with examples:',
      buttonname: 'Show Answer',
      answer:
        '<ul>' +
        '  <li><b>push:</b> Adds one or more elements to the end of an array and returns the new length of the array.</li>' +
        '  <li><b>pop:</b> Removes the last element from an array and returns that element.</li>' +
        '  <li><b>shift:</b> Removes the first element from an array and returns that element.</li>' +
        '  <li><b>unshift:</b> Adds one or more elements to the beginning of an array and returns the new length of the array.</li>' +
        '  <li><b>slice:</b> Returns a shallow copy of a portion of an array into a new array object.</li>' +
        '  <li><b>splice:</b> Changes the contents of an array by removing or replacing existing elements and/or adding new elements.</li>' +
        '  <li><b>map:</b> Creates a new array with the results of calling a provided function on every element in the array.</li>' +
        '  <li><b>filter:</b> Creates a new array with all elements that pass the test implemented by the provided function.</li>' +
        '  <li><b>reduce:</b> Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.</li>' +
        '</ul>' +
        'For example, here is how you can use the "map" method:\n\n' +
        '```javascript\n' +
        'const numbers = [1, 2, 3, 4, 5];\n' +
        'const doubledNumbers = numbers.map(num => num * 2);\n' +
        'console.log(doubledNumbers); // [2, 4, 6, 8, 10]\n' +
        '```\n',
      show: false,
    },
    {
      question: 'What is the difference between "let," "var," and "const" in JavaScript?',
      buttonname: 'Show Answer',
      answer:
        '<ul>' +
        '  <li><b>let:</b> Allows variable reassignment, making it suitable for variables whose values may change.</li>' +
        '  <li><b>const:</b> Creates a constant variable that cannot be reassigned. It is suitable for values that should not change.</li>' +
        '  <li><b>var:</b> Is less strict in scope and reassignment compared to "let" and "const." It is function-scoped.</li>' +
        '</ul>',
      show: false,
    },
    {
      question: 'What is AJAX? Explain with examples:',
      buttonname: 'Show Answer',
      answer:
        'AJAX (Asynchronous JavaScript and XML) is a technique for making asynchronous requests to a server without needing to refresh the entire web page. It allows you to update parts of a web page dynamically. An example of AJAX in action is making an HTTP request to fetch data from a server and updating a web page without a full reload. Here is a basic example using JavaScript and the Fetch API:\n\n' +
        '```javascript\n' +
        'fetch("https://api.example.com/data")\n' +
        '  .then(response => response.json())\n' +
        '  .then(data => {\n' +
        '    // Handle the data and update the page\n' +
        '    console.log(data);\n' +
        '  })\n' +
        '  .catch(error => {\n' +
        '    // Handle errors\n' +
        '    console.error(error);\n' +
        '  });\n' +
        '```\n',
      show: false,
    },
    {
      question: 'What is a single-page application?',
      buttonname: 'Show Answer',
      answer:
        'A Single Page Application (SPA) is a type of web application or website that interacts with the user by dynamically rewriting the current web page rather than loading entire new pages from the server. In a traditional multi-page application, when you click on a link or interact with the application, the browser typically loads an entirely new HTML page from the server. In contrast, SPAs load a single HTML page initially and then update the content of that page dynamically as the user interacts with the application, without requiring full-page reloads.',
      show: false,
    },
    {
      question: 'What is a component in Angular?',
      buttonname: 'Show Answer',
      answer:
        'In Angular, a component is a fundamental building block for creating user interfaces and organizing the application\'s logic and user interface into reusable, self-contained units. Each component encapsulates a specific part of the user interface and its associated behavior. Components are at the core of Angular\'s architecture and follow a component-based development approach.',
      show: false,
    },
    {
      question: 'Explain with syntax the following directives:',
      buttonname: 'Show Answer',
      answer:
        '<ul>' +
        '  <li><b>ngFor:</b> The "ngFor" directive is used in Angular templates to iterate over a collection (e.g., an array) and render a template for each item in the collection. Syntax example:\n' +
        '```html\n' +
        '<ul>\n' +
        '  <li *ngFor="let item of items">{{ item }}</li>\n' +
        '</ul>\n' +
        '```\n' +
        '</li>' +
        '  <li><b>ngIf:</b> The "ngIf" directive is used to conditionally render elements in the template based on a specified condition. Syntax example:\n' +
        '```html\n' +
        '<div *ngIf="showElement">This element is shown if showElement is true.</div>\n' +
        '```\n' +
        '</li>' +
        '</ul>',
      show: false,
    },
    // Add more questions and answers as needed    
  ];

  toggleDisplay(item: any) {
    item.show = !item.show;
    item.buttonname = item.show ? 'Hide Answer' : 'Show Answer';
  }

  MyName: string = 'Shubham Phapale';
  MyRollNo: string = 'BT21CSE111';
  MyEmail: string = 'shubhamphapale10@email.com';

}
  
