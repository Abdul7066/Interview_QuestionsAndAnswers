import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, BookOpen, Code, Server, ArrowLeft } from 'lucide-react';

const BackendInterviewQA = ({onBack}) => {
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const questions = [
    // JavaScript Section
    {
      id: 'js-1',
      category: 'javascript',
      question: "What is JavaScript?",
      answer: "JavaScript is a scripting language used for creating dynamic web content. It is dependent, single-threaded and synchronous by default but supports asynchronous behavior."
    },
    {
      id: 'js-2',
      category: 'javascript',
      question: "What are the different data types in JavaScript?",
      answer: (
        <div>
          <p><strong>Primitive types:</strong> SSNNBBU (String, Symbol, Number, Null, Boolean, BigInt, Undefined)</p>
          <p className="mt-2"><strong>Non-primitive types:</strong> Object, Arrays, and Date</p>
        </div>
      )
    },
    {
      id: 'js-3',
      category: 'javascript',
      question: "What is the difference between == and ===?",
      answer: "== tries to convert the value to the same data type, while === strictly checks both the value and the data type."
    },
    {
      id: 'js-4',
      category: 'javascript',
      question: "What are JavaScript functions?",
      answer: "A function is a block of reusable code designed to perform a particular task."
    },
    {
      id: 'js-5',
      category: 'javascript',
      question: "What are closures in JavaScript?",
      answer: "Closure has access to its outer scope variables, even after the outer function has executed."
    },
    {
      id: 'js-6',
      category: 'javascript',
      question: "What is the difference between let, const, and var?",
      answer: "Var is global level scope - it can be redeclared and re-assigned. Let and const are ES6 features with block level scope. Let cannot be redeclared but can be re-assigned. Const cannot be redeclared or re-assigned."
    },
    {
      id: 'js-7',
      category: 'javascript',
      question: "What is the difference between undefined and null?",
      answer: "Undefined means a variable has been declared but not assigned a value. Null means an assigned value of null."
    },
    {
      id: 'js-8',
      category: 'javascript',
      question: "What are operators in JavaScript?",
      answer: "There are three types of operators: Assignment, Logical, and Arithmetical."
    },
    {
      id: 'js-9',
      category: 'javascript',
      question: "What are events in JavaScript?",
      answer: "JavaScript events are actions or occurrences that happen in the browser. They can be triggered by user interaction or by the browser itself."
    },
    {
      id: 'js-10',
      category: 'javascript',
      question: "What are Arrays in JavaScript?",
      answer: "Arrays are used to store multiple data values in a single variable."
    },
    {
      id: 'js-11',
      category: 'javascript',
      question: "What is callback in JavaScript?",
      answer: "Hoisting is a behavior in JavaScript. Declaration of variables and functions are moved to the top of their respective scope during the compilation phase."
    },
    {
      id: 'js-12',
      category: 'javascript',
      question: "What are promises in JavaScript?",
      answer: "Promises are objects in JavaScript that take a function with resolve and reject as arguments. They provide a way to handle asynchronous operations and enable better control flow. Promises allow you to use methods like .then() to handle the resolved state and .catch() to handle the rejected state."
    },
    {
      id: 'js-13',
      category: 'javascript',
      question: "What is async/await in JavaScript?",
      answer: "These are keywords in JavaScript used to handle asynchronous operations more easily and readably. async is used to make a function asynchronous, and await is used to pause the execution of the function until the asynchronous operation is resolved."
    },
    {
      id: 'js-14',
      category: 'javascript',
      question: "What is DOM?",
      answer: "DOM stands for Document Object Model. It is a programming interface that provides a way to access, manipulate, and interact with the structure of a web document."
    },
    {
      id: 'js-15',
      category: 'javascript',
      question: "What is JSON?",
      answer: "JSON stands for JavaScript Object Notation. It is a lightweight format for storing and transporting data."
    },
    {
      id: 'js-16',
      category: 'javascript',
      question: "What is arrow function in JavaScript?",
      answer: "Arrow function is a shorter way to write a function."
    },
    {
      id: 'js-17',
      category: 'javascript',
      question: "What is Spread operator and Rest parameter in JavaScript?",
      answer: "The spread operator is a feature in JavaScript that allows you to expand or unpack items into arrays or objects. The rest parameter allows a function to take any number of arguments and puts them into an array."
    },
    {
      id: 'js-18',
      category: 'javascript',
      question: "What is the purpose of try, catch and finally block in JavaScript?",
      answer: "The try block contains the code that might throw an exception. If an exception occurs, it is caught by the catch block, which contains the error handling logic. The finally block, if present, is executed regardless of whether an exception is thrown or not."
    },
    {
      id: 'js-20',
      category: 'javascript',
      question: "Difference between function expression and function declaration in JavaScript?",
      answer: "The difference between them is in syntax and hoisting. A function declaration is defined with the function keyword, followed by the function name, and it is hoisted. A function expression is defined by assigning a function to a variable, which can be anonymous or named, and function expressions are not hoisted."
    },
    {
      id: 'js-21',
      category: 'javascript',
      question: "What is the difference between map() and forEach() in JavaScript?",
      answer: "The map() function creates a new array by transforming each element in an existing array and returns the transformed array, while forEach() executes a function for each element in an array but doesn't return anything."
    },
    {
      id: 'js-22',
      category: 'javascript',
      question: "What is callback hell and how is it avoided?",
      answer: "Callback hell happens when multiple callback functions are nested on top of each other, making the code harder to read and maintain. There are several ways to avoid it, such as using Promises, async/await, and try/catch blocks."
    },
    {
      id: 'js-23',
      category: 'javascript',
      question: "What is Deep copy and Shallow copy in JavaScript?",
      answer: "Shallow copy creates a new object with reference to the same memory location as the original object. While deep copy creates a new object with new memory location for all of its properties and nested arrays or objects."
    },
    {
      id: 'js-24',
      category: 'javascript',
      question: "What is Synchronous and Asynchronous in JavaScript?",
      answer: "Asynchronous is non-blocking architecture - the execution of one task is not dependent on another task. While synchronous is blocking architecture - the execution of each operation depends on completing the one before it."
    },
    {
      id: 'js-25',
      category: 'javascript',
      question: "What is the difference between While and doWhile?",
      answer: "The while loop checks the condition before executing the loop body, whereas the do...while loop executes the loop body at least once before checking the condition."
    },
    {
      id: 'js-26',
      category: 'javascript',
      question: "What is Currying in JavaScript?",
      answer: "Currying is a functional programming concept where a function is transformed into a sequence of functions, each taking a single argument. Instead of taking all its arguments at once, a curried function takes one argument, returns a new function that takes the next argument, and so on."
    },
    {
      id: 'js-27',
      category: 'javascript',
      question: "Call By Value & Call By Reference?",
      answer: (
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-blue-600">Call By Value:</p>
            <p>A copy of the value is passed to the function. Changes inside the function do not affect the original value. Uses primitive data types like number, string.</p>
          </div>
          <div>
            <p className="font-semibold text-blue-600">Call By Reference:</p>
            <p>A reference (memory address) to the value is passed. Changes inside the function affect the original value. Uses non-primitive data types like object, array.</p>
          </div>
        </div>
      )
    },
    // Node.js Section
    {
      id: 'node-1',
      category: 'nodejs',
      question: "What is Node.js?",
      answer: "Node.js is a runtime environment that allows you to run JavaScript outside of a web browser. It is used for building fast, scalable, and efficient server-side applications using JavaScript."
    },
    {
      id: 'node-2',
      category: 'nodejs',
      question: "Why Node.js?",
      answer: "Node.js offers significant advantages: Fast and Efficient, Highly scalable, Asynchronous and Non-blocking I/O, etc."
    },
    {
      id: 'node-3',
      category: 'nodejs',
      question: "What is Event-Loop?",
      answer: "The event loop is a mechanism that handles asynchronous operations. It allows Node.js to perform non-blocking I/O operations in a single thread."
    },
    {
      id: 'node-4',
      category: 'nodejs',
      question: "What is Event-Driven?",
      answer: "Event-driven programming in Node.js uses an event loop to manage multiple events asynchronously. The non-blocking model ensures that tasks don't wait for each other to finish, allowing Node.js to handle multiple operations simultaneously to make it fast and efficient."
    },
    {
      id: 'node-5',
      category: 'nodejs',
      question: "What is Non-blocking I/O?",
      answer: "The non-blocking model ensures that tasks don't wait for each other to finish."
    },
    {
      id: 'node-6',
      category: 'nodejs',
      question: "What are callbacks in Node.js?",
      answer: "A callback is a function that is passed inside another function as an argument."
    },
    {
      id: 'node-7',
      category: 'nodejs',
      question: "What is the difference between require() and import in Node.js?",
      answer: "require() is used to include modules in Node.js (CommonJS style), while import is part of ES6 module syntax."
    },
    {
      id: 'node-8',
      category: 'nodejs',
      question: "What is middleware?",
      answer: "Middleware functions sit between the request and response cycle, performing tasks like logging, authentication, and data processing."
    },
    {
      id: 'node-9',
      category: 'nodejs',
      question: "What is Buffer in Node.js?",
      answer: "A buffer is a temporary storage space for binary data, allowing Node.js to handle raw data directly, like files, images, etc."
    },
    {
      id: 'node-10',
      category: 'nodejs',
      question: "What is Stream in Node.js?",
      answer: "Stream is a way to handle data that is too large to process all at once by breaking it into smaller chunks. It allows reading or writing data piece by piece instead of loading everything into memory at once."
    },
    {
      id: 'node-11',
      category: 'nodejs',
      question: "What is Cluster in Node.js?",
      answer: "The Cluster module is used to run multiple instances of Node.js that can distribute workloads among their application processes. It enables creation of child processes (called workers) that run simultaneously."
    },
    {
      id: 'node-12',
      category: 'nodejs',
      question: "What is Thread Pool in Node.js?",
      answer: "A thread pool is a collection of worker threads that manage heavy tasks, such as API fetching and network-related operations."
    },
    {
      id: 'node-13',
      category: 'nodejs',
      question: "What are Worker Threads in Node.js?",
      answer: "In Node.js, Worker Threads provide a way to execute JavaScript code in parallel across multiple threads."
    },
    {
      id: 'node-14',
      category: 'nodejs',
      question: "What is Child Process in Node.js?",
      answer: "In Node.js, a child process is a separate process created by a Node.js application to perform tasks in parallel."
    },
    {
      id: 'node-15',
      category: 'nodejs',
      question: "What is a module in Node.js?",
      answer: "A module in Node.js is a block of code that provides specific functionality, which can be reused across different parts of an application."
    },
    {
      id: 'node-16',
      category: 'nodejs',
      question: "Is Node.js single-threaded?",
      answer: "Yes, Node.js is single-threaded but uses event-driven architecture and non-blocking I/O to handle multiple requests efficiently."
    },
    {
      id: 'node-18',
      category: 'nodejs',
      question: "What is npm and its advantages?",
      answer: "npm is the default package manager for Node.js, offering benefits like dependency management, version control, and a centralized repository."
    },
    {
      id: 'node-19',
      category: 'nodejs',
      question: "What is package.json in Node.js?",
      answer: "package.json is a metadata file in Node.js that contains information about the project, such as dependencies, scripts, and version."
    },
    {
      id: 'node-20',
      category: 'nodejs',
      question: "What is body-parser in Node.js?",
      answer: "Body-parser is middleware that parses incoming request bodies in a middleware before handling it in Node.js applications."
    },
    {
      id: 'node-21',
      category: 'nodejs',
      question: "What is CORS in Node.js?",
      answer: "CORS stands for Cross-Origin Resource Sharing, allowing restricted resources on a web page to be requested from another domain."
    },
    {
      id: 'node-22',
      category: 'nodejs',
      question: "What is libuv library?",
      answer: "Libuv is a powerful library written in C that gives Node.js its ability to handle asynchronous operations and non-blocking I/O."
    },
    {
      id: 'node-24',
      category: 'nodejs',
      question: "What is REPL in Node.js?",
      answer: (
        <div className="space-y-2">
          <p>REPL stands for Read, Evaluate, Print, and Loop. It's an interactive environment for executing Node.js code and debugging.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Read:</strong> Takes user input and parses it into a JavaScript expression</li>
            <li><strong>Eval:</strong> Evaluates the parsed JavaScript code</li>
            <li><strong>Print:</strong> Displays the result of the evaluated code to the user</li>
            <li><strong>Loop:</strong> Repeats the process for the next input</li>
          </ul>
        </div>
      )
    },
    {
      id: 'node-25',
      category: 'nodejs',
      question: "Authentication & Authorization?",
      answer: "Authentication is the process of verifying the identity of a user. Authorization is the process of determining what that person is allowed to do or access after they've been authenticated."
    },
    {
      id: 'node-26',
      category: 'nodejs',
      question: "What is EventEmitter in Node.js?",
      answer: "EventEmitter is a class in Node.js used to handle events. It allows objects to emit events (e.g., 'data' or 'error') and listen for them to perform actions when they occur."
    },
    {
      id: 'node-27',
      category: 'nodejs',
      question: "setTimeout & setImmediate?",
      answer: "setTimeout() delays the execution of a function by a specified time, while setImmediate() schedules a function to run after the current event loop cycle."
    },
    {
      id: 'node-28',
      category: 'nodejs',
      question: "How do you handle errors in Node.js?",
      answer: "There are several ways to handle errors in Node.js, including Promises, async/await, and try/catch blocks."
    },
    {
      id: 'node-29',
      category: 'nodejs',
      question: "What is the role of the global object in Node.js?",
      answer: "The global object in Node.js provides global variables and functions that can be accessed anywhere in your application. It's similar to the window object in browsers."
    },
    {
      id: 'node-30',
      category: 'nodejs',
      question: "What is process.nextTick() in Node.js?",
      answer: "process.nextTick() is used to execute a function after the current operation completes, but before any I/O tasks. It ensures that a callback is executed as soon as possible."
    },
    // Express Section
    {
      id: 'express-1',
      category: 'express',
      question: "What is Express.js?",
      answer: "Express.js is a minimal and flexible Node.js web application framework that provides a set of features for building web and mobile applications. It simplifies the process of handling HTTP requests, routing, middleware, and managing views. Express is widely used for creating RESTful APIs and web applications."
    },
    {
      id: 'express-2',
      category: 'express',
      question: "What is the difference between app.use() and app.all() in Express?",
      answer: "app.use() is used to apply middleware functions to routes, while app.all() is used to define handlers for all HTTP methods (GET, POST, etc.) for a specific route."
    },
    {
      id: 'express-3',
      category: 'express',
      question: "What is the difference between res.send() and res.json() in Express?",
      answer: "res.send() is used to send a response of any type (text, HTML, etc.), while res.json() is specifically used to send a JSON response."
    },
    {
      id: 'express-4',
      category: 'express',
      question: "What is Express Router?",
      answer: "Express Router is a feature that allows you to create modular route handlers."
    },
    {
      id: 'express-5',
      category: 'express',
      question: "How do you handle errors in Express.js?",
      answer: "Errors in Express.js are handled using middleware functions with four parameters: err, req, res, next."
    },
    {
      id: 'express-6',
      category: 'express',
      question: "What is the purpose of req.body in Express.js?",
      answer: "req.body contains data sent in the body of the HTTP request, typically used in POST or PUT requests to handle form data or JSON payload."
    },
    {
      id: 'express-7',
      category: 'express',
      question: "What is the purpose of app.listen() in Express.js?",
      answer: "app.listen() is used to bind and listen for incoming HTTP requests on a specific port."
    },
    {
      id: 'express-8',
      category: 'express',
      question: "What is the purpose of app.use() in Express.js?",
      answer: "app.use() is used to apply middleware functions to specific routes or all routes in an Express application."
    },
    // MongoDB Section
    {
      id: 'mongo-1',
      category: 'mongodb',
      question: "What is MongoDB?",
      answer: "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON (Binary JSON). It allows you to store and query large amounts of unstructured data."
    },
    {
      id: 'mongo-2',
      category: 'mongodb',
      question: "What is the difference between SQL and NoSQL databases?",
      answer: "SQL databases store data in tables with a fixed schema (e.g., MySQL), while NoSQL databases like MongoDB store data in collections with a flexible schema (e.g., documents)."
    },
    {
      id: 'mongo-3',
      category: 'mongodb',
      question: "What are collections and documents in MongoDB?",
      answer: "A collection is a group of MongoDB documents, similar to a table in SQL. A document is a set of key-value pairs, similar to a row in SQL."
    },
    {
      id: 'mongo-4',
      category: 'mongodb',
      question: "What is BSON in MongoDB?",
      answer: "BSON (Binary JSON) is a binary format that MongoDB uses to store data."
    },
    {
      id: 'mongo-5',
      category: 'mongodb',
      question: "What is the difference between find() and findOne() in MongoDB?",
      answer: "find() returns an array of documents that match the query, while findOne() returns only the first document that matches the query."
    },
    {
      id: 'mongo-6',
      category: 'mongodb',
      question: "What is an ObjectId in MongoDB?",
      answer: "ObjectId is a unique identifier automatically assigned to documents when they are created."
    },
    {
      id: 'mongo-7',
      category: 'mongodb',
      question: "What is indexing in MongoDB?",
      answer: "Indexing in MongoDB is a way to improve query performance."
    },
    {
      id: 'mongo-8',
      category: 'mongodb',
      question: "What is Replication in MongoDB?",
      answer: "Replication is the process of creating and maintaining multiple copies of data across different servers."
    },
    {
      id: 'mongo-9',
      category: 'mongodb',
      question: "What is Sharding in MongoDB?",
      answer: "Sharding is a method in MongoDB for distributing data across multiple servers. It helps in horizontal scaling by breaking up a large collection into smaller, manageable parts called shards."
    },
    {
      id: 'mongo-10',
      category: 'mongodb',
      question: "What is Replica Set in MongoDB?",
      answer: "Replica set is a group of MongoDB servers that maintain the same data set, providing redundancy and high availability."
    },
    {
      id: 'mongo-11',
      category: 'mongodb',
      question: "What is .pretty() in MongoDB?",
      answer: "The .pretty() method in MongoDB is used to format the output of a query in a more readable and human-friendly way."
    },
    {
      id: 'mongo-12',
      category: 'mongodb',
      question: "What is Scaling in MongoDB?",
      answer: (
        <div className="space-y-3">
          <p>In MongoDB, scaling is a strategy used to handle increased data loads and expand the database's capacity.</p>
          <div>
            <p className="font-semibold text-blue-600">Horizontal Scaling:</p>
            <p>Expands capacity by adding multiple servers and distributing data across them.</p>
          </div>
          <div>
            <p className="font-semibold text-blue-600">Vertical Scaling:</p>
            <p>Adding more resources (CPU, RAM, or storage) to a single server.</p>
          </div>
          <p className="text-sm text-gray-600">Horizontal scaling is better for handling large datasets and high traffic, while vertical scaling is simpler but limited by the server's hardware capacity.</p>
        </div>
      )
    },
    {
      id: 'mongo-13',
      category: 'mongodb',
      question: "What is Aggregation in MongoDB?",
      answer: (
        <div className="space-y-2">
          <p>Aggregation is the process that groups data from multiple documents into a single document based on the specified expression.</p>
          <div>
            <p className="font-semibold text-blue-600 mt-2">Aggregation Pipeline:</p>
            <p>The aggregation process in MongoDB consists of several stages. Each stage transforms the data in some way. A pipeline is an array of different operations.</p>
          </div>
        </div>
      )
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics', color: 'blue', icon: BookOpen },
    { id: 'javascript', name: 'JavaScript', color: 'yellow', icon: Code },
    { id: 'nodejs', name: 'Node.js', color: 'green', icon: Server },
    { id: 'express', name: 'Express.js', color: 'purple', icon: Server },
    { id: 'mongodb', name: 'MongoDB', color: 'emerald', icon: Server }
  ];

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || q.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleQuestion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getCategoryColor = (category) => {
    const colors = {
      javascript: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      nodejs: 'bg-green-100 text-green-800 border-green-300',
      express: 'bg-purple-100 text-purple-800 border-purple-300',
      mongodb: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-300';
  };

  const getCategoryStats = () => {
    return categories.map(cat => ({
      ...cat,
      count: cat.id === 'all' 
        ? questions.length 
        : questions.filter(q => q.category === cat.id).length
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          {onBack && (
            <button
              onClick={onBack}
              className="mb-6 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </button>
          )}
          <div className="flex items-center gap-3 mb-4">
            <Server className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Backend Interview Guide</h1>
          </div>
          <p className="text-blue-100 text-lg">JavaScript • Node.js • Express.js • MongoDB</p>
          <div className="mt-6 flex items-center gap-2 text-sm">
            <BookOpen className="w-5 h-5" />
            <span>{questions.length} Questions Covered</span>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="max-w-6xl mx-auto px-6 -mt-6">
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {getCategoryStats().map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    isActive ? 'bg-white/20' : 'bg-gray-200'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="space-y-4">
          {filteredQuestions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <button
                onClick={() => toggleQuestion(item.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors rounded-lg"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(item.category)}`}>
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="font-semibold text-gray-800 text-lg pt-0.5">
                    {item.question}
                  </h3>
                </div>
                {expandedId === item.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
                )}
              </button>
              
              {expandedId === item.id && (
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-20 text-gray-700 leading-relaxed">
                    {typeof item.answer === 'string' ? (
                      <p>{item.answer}</p>
                    ) : (
                      item.answer
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No questions found matching your search.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-500 text-sm">
        
      </div>
    </div>
  );
};

export default BackendInterviewQA;