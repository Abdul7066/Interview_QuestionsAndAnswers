import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, BookOpen, Code, ArrowLeft } from 'lucide-react';

const InterviewQA = ({ onBack }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const questions = [
    {
      id: 1,
      question: "What is Redux? Please Explain me in detail?",
      answer: (
        <div className="space-y-4">
          <p>Redux is the JavaScript library which is used to managing the state of the application to the global level.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Redux is a single source of truth</li>
            <li>It has action, store & reducer</li>
          </ul>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-blue-600 mb-1">Store:</h4>
              <p>We create a centralized storage in Redux to manage the entire application state. We can use useDispatch to update the state and useSelector to read the state in React.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-1">Action:</h4>
              <p>Action is a plain JavaScript object that represent events or update in the application.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-1">Reducers:</h4>
              <p>Reducer are pure function that's take the current state and do action as arguments and return a new state.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      question: "Difference between Virtual DOM and Real DOM?",
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-blue-600 mb-2">Virtual DOM:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Virtual DOM is a light weight copy of the real DOM. This makes the app faster</li>
              <li>It stores copy in components</li>
              <li>It creates node tree of components</li>
              <li>In virtual DOM there is no wastage of memory</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600 mb-2">Real DOM:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Real DOM updates slowly</li>
              <li>Real DOM allows direct updates from HTML</li>
              <li>It wastes too much memory</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 3,
      question: "Advantages of React.js?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Increase the application performance with the virtual DOM</li>
          <li>JSX makes code easy to read & write</li>
          <li>React supports client-side rendering by default</li>
          <li>React is one way data flow</li>
        </ul>
      )
    },
    {
      id: 4,
      question: "What is JSX?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>JSX is JavaScript XML</li>
          <li>JSX allows you to write HTML inside JS</li>
          <li>JSX is the combination of JS & HTML</li>
        </ul>
      )
    },
    {
      id: 5,
      question: "What is the difference between functional and class components?",
      answer: (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-50">
                <th className="border border-blue-200 p-3 text-left">Class Components</th>
                <th className="border border-blue-200 p-3 text-left">Functional Components</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-3">Can manage state using this.state</td>
                <td className="border border-gray-200 p-3">Can manage state using useState hook</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3">More complex than functional components</td>
                <td className="border border-gray-200 p-3">Simple and easy to understand</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Life cycle methods can be used</td>
                <td className="border border-gray-200 p-3">Cannot use lifecycle methods but can use useEffect Hook</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3">Must have render method returning JSX</td>
                <td className="border border-gray-200 p-3">No render method required</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Constructors are used to store state</td>
                <td className="border border-gray-200 p-3">Constructors are not used</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3">Props pass data from parent to child</td>
                <td className="border border-gray-200 p-3">Props also pass data from parent to child</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      id: 6,
      question: "Explain Error boundaries in React.js?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Error boundaries catch JS errors in their child components, log these errors and show fallback UI</li>
          <li>Error boundaries are only used in class components</li>
          <li>We can handle errors using componentDidCatch() and show fallback UI using getDerivedStateFromError()</li>
        </ul>
      )
    },
    {
      id: 7,
      question: "How do you handle forms in React.js?",
      answer: (
        <p>I handle forms in React using external libraries like React Hook Form for better control, real-time validation or updates, and cleaner code.</p>
      )
    },
    {
      id: 8,
      question: "Difference between Props and State?",
      answer: (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-50">
                <th className="border border-blue-200 p-3 text-left">Props</th>
                <th className="border border-blue-200 p-3 text-left">State</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-3">Used to pass data from parent to child components</td>
                <td className="border border-gray-200 p-3">Used to manage data inside the component</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3">Props are immutable - cannot be changed or updated</td>
                <td className="border border-gray-200 p-3">State is mutable - can be changed or updated</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      id: 9,
      question: "Higher Order Components (HOC) in React?",
      answer: (
        <p>It's a new and advanced technique which is used to reuse logic. It's a function that takes a component as an argument and returns a new component.</p>
      )
    },
    {
      id: 10,
      question: "Difference between controlled and uncontrolled components?",
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-blue-600 mb-2">Controlled Components:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>A controlled component is controlled by React State</li>
              <li>A controlled component receives its current value through props and changes through callbacks like onChange</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600 mb-2">Uncontrolled Components:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>An uncontrolled component is not controlled by React state</li>
              <li>Uncontrolled component is directly controlled through DOM & if we want to control the state we can use Ref</li>
              <li>Uncontrolled component maintains its own state internally</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 11,
      question: "Explain Lazy loading in React.js?",
      answer: (
        <div className="space-y-2">
          <p>Lazy loading is used to optimize the performance of React applications & improve the loading time of applications.</p>
          <p>Lazy loading allows you to load only parts that are needed by a user. Remaining parts are loaded later when the user interacts with the application. This helps make the application faster.</p>
        </div>
      )
    },
    {
      id: 12,
      question: "What is useRef?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>useRef Hook is used for managing focus, media playback & text selection</li>
          <li>useRef is also used for DOM manipulation</li>
          <li>It allows you to persist values between renders</li>
        </ul>
      )
    },
    {
      id: 13,
      question: "What are Lifecycle methods in React?",
      answer: (
        <div className="space-y-4">
          <p>Lifecycle methods are only used in class components. Lifecycle methods are classified into three phases:</p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>componentDidMount:</strong> Runs after the component is mounted to the DOM. Commonly used for API calls or subscriptions.
            </li>
            <li>
              <strong>componentDidUpdate:</strong> Runs after the DOM updates. Used for performing side effects like fetching data or DOM manipulation.
            </li>
            <li>
              <strong>componentWillUnmount:</strong> Used for cleaning up resources like timers or event listeners.
            </li>
          </ol>
        </div>
      )
    },
    {
      id: 14,
      question: "What is useMemo?",
      answer: (
        <div className="space-y-2">
          <p>useMemo Hook is used to optimize the performance of applications.</p>
          <p>It allows you to memoize the result of expensive calculations.</p>
          <p>useMemo hook is similar to useEffect. It takes 2 parameters: a function and dependencies array.</p>
          <p>useMemo hook helps avoid unnecessary re-rendering and re-calculations.</p>
        </div>
      )
    },
    {
      id: 15,
      question: "useReducer Hook in React?",
      answer: (
        <div className="space-y-2">
          <p>useReducer hook is used for state management in functional components, similar to useState.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>It takes two parameters: a reducer function and initial state</li>
            <li>Reducer function has two parameters: current state and action as argument, and returns a new state</li>
            <li>useReducer hook returns an array with 2 values: the current state value and a dispatch function</li>
          </ul>
        </div>
      )
    },
    {
      id: 16,
      question: "What is useState hook in React.js?",
      answer: (
        <div className="space-y-2">
          <p>useState hook is used for managing the state of functional components.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>useState hook takes 1 argument and returns 2 values</li>
            <li>Getter and Setter</li>
            <li>Getter gets current state value & Setter is used to update the state</li>
            <li>Example: counter app</li>
          </ul>
        </div>
      )
    },
    {
      id: 17,
      question: "Explain useEffect hook in React.js?",
      answer: (
        <div className="space-y-2">
          <p>useEffect hook allows you to perform side effects in functional components such as data fetching from an API, subscriptions, or manually updating the DOM.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Without a dependency array, it runs after every render</li>
            <li>With an empty dependency array, it runs only once after the initial render</li>
            <li>With a dependency array, it runs only when those dependencies change</li>
          </ul>
        </div>
      )
    },
    {
      id: 18,
      question: "What is the difference between useContext API and React Redux?",
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-blue-600 mb-2">useContext API:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>useContext is mostly used for small scale applications</li>
              <li>Used to share data across the component tree without manually passing props at each level</li>
              <li>Can trigger unnecessary re-rendering if not optimized</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600 mb-2">Redux:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Redux is used for large scale applications and is more powerful compared to useContext API</li>
              <li>Redux uses a centralized store to manage the entire application state</li>
              <li>Redux is a single source of truth</li>
              <li>Redux has debugging tools like Redux DevTools to simplify debugging</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 19,
      question: "How to optimize the React application?",
      answer: (
        <p>I usually optimize my React app by avoiding extra re-renders using React.memo and useCallback. I also use lazy loading and code splitting so the app loads faster. I make sure images are optimized, use pagination for API data, and build the project in production mode for better performance.</p>
      )
    },
    {
      id: 20,
      question: "Debouncing and Throttling?",
      answer: (
        <div className="space-y-3">
          <div>
            <p><strong>Debouncing</strong> means delaying a function until the user stops doing something for a short time.</p>
            <p className="text-sm text-gray-600 mt-1">Example: Calling API only after the user stops typing.</p>
          </div>
          <div>
            <p><strong>Throttling</strong> means allowing a function to run only once in a fixed time period, even if it's called many times.</p>
            <p className="text-sm text-gray-600 mt-1">Example: Running a scroll event only once every second.</p>
          </div>
        </div>
      )
    }
  ];

  const filteredQuestions = questions.filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleQuestion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
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
            <Code className="w-10 h-10" />
            <h1 className="text-4xl font-bold">React.js Interview Guide</h1>
          </div>
          <p className="text-blue-100 text-lg">Master the most commonly asked React interview questions</p>
          <div className="mt-6 flex items-center gap-2 text-sm">
            <BookOpen className="w-5 h-5" />
            <span>{questions.length} Questions Covered</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto px-6 -mt-6">
        <div className="bg-white rounded-lg shadow-lg p-4">
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
        </div>
      </div>

      {/* Questions List */}
      <div className="max-w-4xl mx-auto px-6 py-8">
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
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {item.id}
                  </span>
                  <h3 className="font-semibold text-gray-800 text-lg pt-1">
                    {item.question}
                  </h3>
                </div>
                {expandedId === item.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {expandedId === item.id && (
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-12 text-gray-700 leading-relaxed">
                    {item.answer}
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
      <div className="max-w-4xl mx-auto px-6 py-8 text-center text-gray-500 text-sm">
        <p>💡 Tip: Click on any question to reveal the answer</p>
      </div>
    </div>
  );
};

export default InterviewQA;