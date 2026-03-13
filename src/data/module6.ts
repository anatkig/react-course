import type { Module } from '../types';

export const module6: Module = {
  id: 'mod-6',
  title: 'State Management Patterns',
  description:
    'Learn patterns for managing application-wide state: Context + useReducer, custom hooks for shared logic, and lifting state up.',
  topics: [
    {
      id: 'mod6-t1',
      title: 'Context + useReducer Pattern',
      explanation: `## Scalable State with Context + useReducer

Combining \`useReducer\` with \`useContext\` gives you a Redux-like pattern built into React.

\`\`\`jsx
import { createContext, useContext, useReducer } from 'react';

// 1. Define types and reducer
const initialState = { todos: [], filter: 'all' };

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'TOGGLE':
      return {
        ...state,
        todos: state.todos.map(t =>
          t.id === action.payload ? { ...t, done: !t.done } : t
        ),
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

// 2. Create contexts (separate for state and dispatch)
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

// 3. Provider component
function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// 4. Custom hooks for consumption
function useTodoState() {
  return useContext(TodoStateContext);
}

function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}
\`\`\`

### Why Separate Contexts?

Splitting state and dispatch into separate contexts prevents unnecessary re-renders. Components that only dispatch actions won't re-render when state changes.

### Usage in Components

\`\`\`jsx
function AddTodo() {
  const dispatch = useTodoDispatch(); // won't re-render on state change
  const handleAdd = (text) => {
    dispatch({ type: 'ADD', payload: { id: Date.now(), text, done: false } });
  };
  return <button onClick={() => handleAdd('New todo')}>Add</button>;
}

function TodoList() {
  const { todos, filter } = useTodoState();
  const filtered = filter === 'all' ? todos : todos.filter(t => t.done);
  return (
    <ul>{filtered.map(t => <li key={t.id}>{t.text}</li>)}</ul>
  );
}
\`\`\``,
      task: {
        description:
          'Build a notification system using Context + useReducer. Create a NotificationProvider that supports ADD_NOTIFICATION (with message and type: success/error/info) and REMOVE_NOTIFICATION actions. Create a NotificationList component and an AddNotification button.',
        starterCode: `import { createContext, useContext, useReducer } from 'react';

// TODO: Define reducer with ADD_NOTIFICATION and REMOVE_NOTIFICATION
// TODO: Create context and provider
// TODO: Create custom hooks
// TODO: Create NotificationList and AddNotification components`,
        solution: `import { createContext, useContext, useReducer } from 'react';

function notificationReducer(state, action) {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return [...state, { id: Date.now(), ...action.payload }];
    case 'REMOVE_NOTIFICATION':
      return state.filter(n => n.id !== action.payload);
    default:
      return state;
  }
}

const NotifContext = createContext();

function NotificationProvider({ children }) {
  const [notifications, dispatch] = useReducer(notificationReducer, []);
  return (
    <NotifContext.Provider value={{ notifications, dispatch }}>
      {children}
    </NotifContext.Provider>
  );
}

function useNotifications() {
  return useContext(NotifContext);
}

function NotificationList() {
  const { notifications, dispatch } = useNotifications();
  return (
    <div className="notifications">
      {notifications.map(n => (
        <div key={n.id} className={\`notification \${n.type}\`}>
          <span>{n.message}</span>
          <button onClick={() => dispatch({ type: 'REMOVE_NOTIFICATION', payload: n.id })}>×</button>
        </div>
      ))}
    </div>
  );
}

function AddNotification() {
  const { dispatch } = useNotifications();
  const add = (type) => {
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: { message: \`\${type} notification\`, type },
    });
  };
  return (
    <div>
      <button onClick={() => add('success')}>Success</button>
      <button onClick={() => add('error')}>Error</button>
      <button onClick={() => add('info')}>Info</button>
    </div>
  );
}`,
        hints: [
          'Use Date.now() for unique notification IDs',
          'The state shape is simply an array of notifications',
          'Create a custom hook to avoid importing context directly',
        ],
      },
    },
    {
      id: 'mod6-t2',
      title: 'Custom Hooks',
      explanation: `## Custom Hooks — Reusable Logic

A custom hook is a function starting with \`use\` that encapsulates reusable stateful logic.

### useLocalStorage

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  return <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>{theme}</button>;
}
\`\`\`

### useToggle

\`\`\`jsx
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle];
}

function Modal() {
  const [isOpen, toggleOpen] = useToggle();
  return (
    <>
      <button onClick={toggleOpen}>Toggle Modal</button>
      {isOpen && <div className="modal">Content</div>}
    </>
  );
}
\`\`\`

### useFetch

\`\`\`jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetch(url, { signal: controller.signal })
      .then(res => res.json())
      .then(data => { setData(data); setLoading(false); })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
\`\`\`

### Rules for Custom Hooks

1. Name must start with \`use\`
2. Can call other hooks inside
3. Can return anything (values, arrays, objects)
4. Follow the same rules as built-in hooks (top level only)`,
      task: {
        description:
          'Create a `useDebounce` custom hook that takes a value and delay, returning the debounced value. Then create a `useFetch` hook that fetches data from a URL. Combine them: build a `UserSearch` component that debounces the search input and fetches matching users.',
        starterCode: `import { useState, useEffect } from 'react';

// TODO: Create useDebounce(value, delay) hook
// TODO: Create useFetch(url) hook
// TODO: Create UserSearch component combining both`,
        solution: `import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();
    setLoading(true);

    fetch(url, { signal: controller.signal })
      .then(res => res.json())
      .then(data => { setData(data); setLoading(false); })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

function UserSearch() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);
  const url = debouncedQuery
    ? \`https://jsonplaceholder.typicode.com/users?q=\${encodeURIComponent(debouncedQuery)}\`
    : '';
  const { data: users, loading, error } = useFetch(url);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search users..." />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {users && (
        <ul>
          {users.map(u => <li key={u.id}>{u.name} — {u.email}</li>)}
        </ul>
      )}
    </div>
  );
}`,
        hints: [
          'useDebounce uses setTimeout + cleanup just like a debounce effect',
          'useFetch should handle null/empty URLs by skipping the fetch',
          'Compose hooks: pass useDebounce output to construct the URL for useFetch',
        ],
      },
    },
    {
      id: 'mod6-t3',
      title: 'Lifting State Up',
      explanation: `## Lifting State Up

When two sibling components need to share state, **lift the state up** to their closest common parent.

### The Problem

\`\`\`jsx
// ❌ Each has its own state — they can't sync
function TemperatureInput() {
  const [temp, setTemp] = useState('');
  return <input value={temp} onChange={e => setTemp(e.target.value)} />;
}

function App() {
  return (
    <div>
      <TemperatureInput /> {/* Celsius */}
      <TemperatureInput /> {/* Fahrenheit */}
    </div>
  );
}
\`\`\`

### The Solution: Lift State Up

\`\`\`jsx
function TemperatureInput({ label, value, onChange }) {
  return (
    <label>
      {label}:
      <input value={value} onChange={e => onChange(e.target.value)} />
    </label>
  );
}

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');

  const fahrenheit = celsius ? String((Number(celsius) * 9/5) + 32) : '';

  return (
    <div>
      <TemperatureInput
        label="Celsius"
        value={celsius}
        onChange={setCelsius}
      />
      <TemperatureInput
        label="Fahrenheit"
        value={fahrenheit}
        onChange={f => setCelsius(String((Number(f) - 32) * 5/9))}
      />
    </div>
  );
}
\`\`\`

### When to Lift vs. Use Context

| Lift State Up | Use Context |
|---------------|-------------|
| 2-3 components share state | Many components across the tree need it |
| Parent-child or sibling relationship | Deeply nested components |
| Simple, local state | App-wide concerns (auth, theme) |`,
      task: {
        description:
          'Create a currency converter with two inputs (USD and EUR). When the user types in one, the other updates automatically. The exchange rate is 1 USD = 0.92 EUR. Lift the state to the parent component.',
        starterCode: `import { useState } from 'react';

function CurrencyInput({ label, value, onChange }) {
  // TODO: render a labeled input
}

function CurrencyConverter() {
  // TODO: manage shared state
  // TODO: convert between USD and EUR
}`,
        solution: `import { useState } from 'react';

function CurrencyInput({ label, value, onChange }) {
  return (
    <label>
      {label}:
      <input
        type="number"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
}

function CurrencyConverter() {
  const [usd, setUsd] = useState('');
  const rate = 0.92;

  const eur = usd ? (Number(usd) * rate).toFixed(2) : '';

  const handleEurChange = (eurValue) => {
    setUsd(eurValue ? (Number(eurValue) / rate).toFixed(2) : '');
  };

  return (
    <div>
      <CurrencyInput label="USD" value={usd} onChange={setUsd} />
      <CurrencyInput label="EUR" value={eur} onChange={handleEurChange} />
    </div>
  );
}`,
        hints: [
          'Store only one value (USD) in state — derive the other',
          'The EUR input onChange should convert back to USD before setting state',
          'Make CurrencyInput a controlled component via props',
        ],
      },
    },
  ],
  test: [
    {
      id: 'mod6-q1',
      question: 'Why split state and dispatch into separate contexts?',
      options: ['It is strictly required by React — you cannot use useReducer without it', 'Components that only dispatch won\'t re-render when state changes', 'It makes the code easier to read by reducing the number of function calls', 'To avoid TypeScript errors when passing dispatch functions through props'],
      correctAnswer: 1,
      explanation:
        'When dispatch is in a separate context, components that only call dispatch don\'t subscribe to state changes, preventing unnecessary re-renders.',
    },
    {
      id: 'mod6-q2',
      question: 'What must a custom hook\'s name start with?',
      options: ['get', 'handle', 'use', 'on'],
      correctAnswer: 2,
      explanation:
        'Custom hooks must start with "use" (e.g., useLocalStorage). This convention lets React enforce the rules of hooks and enables linting.',
    },
    {
      id: 'mod6-q3',
      question: 'When should you lift state up?',
      options: ['Always — state should be stored at the very top of the component tree', 'When the component tree is more than three levels deep regardless of data flow', 'Only when using TypeScript because it requires explicit state type definitions', 'When two sibling components need to share and sync the same data'],
      correctAnswer: 3,
      explanation:
        'Lift state up when two or more sibling components need to reflect the same changing data. Move the state to their closest common parent.',
    },
    {
      id: 'mod6-q4',
      question: 'What is the lazy initializer pattern in useState?',
      options: ['Wrapping the initial value in a setTimeout to defer its calculation', 'Passing a function to useState that runs once to compute the initial value', 'Using useEffect to calculate and set state after the component first mounts', 'Setting the initial state to undefined and assigning it during the first render'],
      correctAnswer: 1,
      explanation:
        'useState(() => expensiveComputation()) accepts a function that runs only on the first render, avoiding expensive recomputation on every render.',
    },
    {
      id: 'mod6-q5',
      question: 'Can custom hooks return JSX?',
      options: [
        'Yes — custom hooks can return anything',
        'No — hooks can only return data, not UI',
        'Only if wrapped in a Fragment',
        'Only in class components',
      ],
      correctAnswer: 0,
      explanation:
        'Custom hooks can return any value including JSX, though returning data (state, handlers, computed values) is the more common and recommended pattern.',
    },
  ],
};
