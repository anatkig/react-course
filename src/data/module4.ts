import type { Module } from '../types';

export const module4: Module = {
  id: 'mod-4',
  title: 'Advanced Hooks',
  description:
    'Master useReducer, useContext, useRef, useMemo, and useCallback for more complex state management and optimization.',
  topics: [
    {
      id: 'mod4-t1',
      title: 'useReducer',
      explanation: `## useReducer — Complex State Logic

\`useReducer\` is an alternative to \`useState\` for managing complex state with multiple sub-values or when the next state depends on the previous one.

\`\`\`jsx
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
\`\`\`

### When to Use useReducer vs useState

| Use \`useState\` | Use \`useReducer\` |
|-----------------|-------------------|
| Simple values (string, number, boolean) | Complex objects or arrays |
| 1–2 state variables | Multiple related state transitions |
| Simple update logic | Next state depends on previous |
| Isolated state | State shared via context |

### Actions with Payloads

\`\`\`jsx
function reducer(state, action) {
  switch (action.type) {
    case 'add_todo':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'remove_todo':
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload),
      };
    default:
      return state;
  }
}

dispatch({ type: 'add_todo', payload: { id: 1, text: 'Learn React' } });
\`\`\``,
      task: {
        description:
          'Create a `ShoppingCart` component using useReducer. Support actions: ADD_ITEM (with name and price), REMOVE_ITEM (by index), and CLEAR_CART. Display items and the total price.',
        starterCode: `import { useReducer } from 'react';

function cartReducer(state, action) {
  // TODO: handle ADD_ITEM, REMOVE_ITEM, CLEAR_CART
}

function ShoppingCart() {
  // TODO: use useReducer with cartReducer
  // TODO: render item list and total
  return null;
}`,
        solution: `import { useReducer } from 'react';

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { items: state.items.filter((_, i) => i !== action.payload) };
    case 'CLEAR_CART':
      return { items: [] };
    default:
      return state;
  }
}

function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const total = state.items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart ({state.items.length} items)</h2>
      <ul>
        {state.items.map((item, i) => (
          <li key={i}>
            {item.name} - \${item.price.toFixed(2)}
            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: i })}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: \${total.toFixed(2)}</p>
      <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: { name: 'Item', price: 9.99 } })}>
        Add Item
      </button>
      <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear</button>
    </div>
  );
}`,
        hints: [
          'The state shape is { items: [] }',
          'Use array spread for adding, filter for removing',
          'Use reduce() to calculate the total price',
        ],
      },
    },
    {
      id: 'mod4-t2',
      title: 'useContext',
      explanation: `## useContext — Avoiding Prop Drilling

Context lets you pass data through the component tree without manually threading props through every level.

### Three Steps

**1. Create the context:**
\`\`\`jsx
import { createContext } from 'react';
const ThemeContext = createContext('light');
\`\`\`

**2. Provide it from a parent:**
\`\`\`jsx
function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Main />
    </ThemeContext.Provider>
  );
}
\`\`\`

**3. Consume it in any descendant:**
\`\`\`jsx
import { useContext } from 'react';

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      className={theme}
      onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </button>
  );
}
\`\`\`

### Creating a Custom Provider

\`\`\`jsx
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
\`\`\`

### When to Use Context

- **Theme** (light/dark mode)
- **Auth** (current user, login/logout)
- **Locale/language**
- **Any data needed by many components** at different nesting levels`,
      task: {
        description:
          'Create a simple AuthContext with a provider that tracks `user` (null or { name }) and provides `login` and `logout` functions. Create a `NavBar` component that shows "Welcome, {name}" with a Logout button when logged in, or a Login button when not.',
        starterCode: `import { createContext, useContext, useState } from 'react';

// TODO: Create AuthContext
// TODO: Create AuthProvider component
// TODO: Create NavBar component that consumes the context`,
        solution: `import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function NavBar() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <nav>
      {user ? (
        <>
          <span>Welcome, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login('Alice')}>Login</button>
      )}
    </nav>
  );
}`,
        hints: [
          'Create context with createContext(null)',
          'The Provider value should be an object containing user, login, and logout',
          'Use useContext(AuthContext) to consume the values',
        ],
      },
    },
    {
      id: 'mod4-t3',
      title: 'useRef & useMemo & useCallback',
      explanation: `## useRef — Mutable References

\`useRef\` returns a mutable object whose \`.current\` property persists across renders **without** causing re-renders.

### DOM Access

\`\`\`jsx
function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => inputRef.current.focus();

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
\`\`\`

### Storing Mutable Values

\`\`\`jsx
function StopWatch() {
  const intervalRef = useRef(null);
  const [seconds, setSeconds] = useState(0);

  const start = () => {
    intervalRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  };

  const stop = () => clearInterval(intervalRef.current);

  return /* ... */;
}
\`\`\`

## useMemo — Caching Expensive Computations

\`\`\`jsx
const sortedItems = useMemo(() => {
  return items.slice().sort((a, b) => a.name.localeCompare(b.name));
}, [items]);
\`\`\`

Only recalculates when \`items\` changes. Don't overuse — only for **genuinely expensive** computations.

## useCallback — Stable Function References

\`\`\`jsx
const handleClick = useCallback((id) => {
  setItems(prev => prev.filter(item => item.id !== id));
}, []);
\`\`\`

Returns a **memoized function** that only changes when dependencies change. Useful when passing callbacks to memoized child components (React.memo).

### useMemo vs useCallback

\`\`\`jsx
// These are equivalent:
const memoizedFn = useMemo(() => () => doSomething(a, b), [a, b]);
const memoizedFn = useCallback(() => doSomething(a, b), [a, b]);
\`\`\``,
      task: {
        description:
          'Create a `FilteredList` component: 1) Use `useRef` to auto-focus a search input on mount. 2) Use `useMemo` to filter and sort a large list based on the search term. 3) Use `useCallback` for the onChange handler.',
        starterCode: `import { useState, useRef, useMemo, useCallback, useEffect } from 'react';

const ITEMS = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: 'Item ' + String(i).padStart(4, '0'),
}));

function FilteredList() {
  // TODO: useRef for input focus
  // TODO: useMemo for filtering + sorting
  // TODO: useCallback for onChange
  return null;
}`,
        solution: `import { useState, useRef, useMemo, useCallback, useEffect } from 'react';

const ITEMS = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: 'Item ' + String(i).padStart(4, '0'),
}));

function FilteredList() {
  const [search, setSearch] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filtered = useMemo(() => {
    return ITEMS
      .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [search]);

  return (
    <div>
      <input ref={inputRef} value={search} onChange={handleChange} placeholder="Filter..." />
      <p>{filtered.length} results</p>
      <ul>
        {filtered.slice(0, 50).map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}`,
        hints: [
          'Use useRef(null) and set it as the ref prop on the input',
          'Call inputRef.current?.focus() in a useEffect with []',
          'useMemo dependencies should include the search term',
        ],
      },
    },
  ],
  test: [
    {
      id: 'mod4-q1',
      question: 'When should you use useReducer instead of useState?',
      options: ['When state updates are complex or involve multiple sub-values', 'Always — it is the recommended replacement for useState in all cases', 'Only when the component also uses context to share its state values', 'When you need to persist state to localStorage across browser sessions'],
      correctAnswer: 0,
      explanation:
        'useReducer is ideal for complex state logic with multiple sub-values, related transitions, or when the next state depends on the previous state in non-trivial ways.',
    },
    {
      id: 'mod4-q2',
      question: 'What problem does useContext solve?',
      options: ['It makes components render faster by caching their previous output in memory', 'It avoids passing props through many levels of components (prop drilling)', 'It is a replacement for useState that offers more advanced state management', 'It provides CSS animation management and transition handling between re-renders'],
      correctAnswer: 1,
      explanation:
        'useContext provides a way to share data across the component tree without manually passing props at every level, solving the "prop drilling" problem.',
    },
    {
      id: 'mod4-q3',
      question: 'Does updating a useRef value cause a re-render?',
      options: ['Yes, updating a ref always triggers an immediate component re-render', 'Only when the ref is attached to a DOM element and its attributes change', 'No — ref changes do not trigger re-renders', 'Only in development mode — production builds skip ref change detection'],
      correctAnswer: 2,
      explanation:
        'Unlike state, changing ref.current does not cause a re-render. Refs are for values that need to persist between renders but shouldn\'t trigger UI updates.',
    },
    {
      id: 'mod4-q4',
      question: 'What is the primary difference between useMemo and useCallback?',
      options: ['useMemo is intended for class components while useCallback is for functional ones', 'useMemo runs only on the initial mount while useCallback runs on every render cycle', 'They are functionally identical and can always be used interchangeably in all cases', 'useMemo caches a computed value, useCallback caches a function reference'],
      correctAnswer: 3,
      explanation:
        'useMemo returns the memoized result of calling a function. useCallback returns the memoized function itself. useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).',
    },
    {
      id: 'mod4-q5',
      question: 'What happens if you omit the Provider for a context?',
      options: ['The application crashes with an error saying that Provider is required', 'Components using useContext receive the default value passed to createContext', 'Components receive undefined and must handle the missing value themselves', 'Context automatically creates an implicit provider at the root of the component tree'],
      correctAnswer: 1,
      explanation:
        'If there is no matching Provider above in the tree, useContext returns the default value that was passed to createContext().',
    },
  ],
};
